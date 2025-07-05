const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors');
const multer = require('multer')
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/Product');
const User = require('./models/User')
const jwt = require('jsonwebtoken');

const mongodb_url = 'mongodb+srv://vanshbandwal93:bca123@cluster0.18vgmn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connect = mongoose.connect(mongodb_url)
connect.then(()=>{
  console.log("Database is connnected successfully")
}).catch((err)=>{
  console.log("Database is not connnected successfully",err)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({  
  origin: 'http://localhost:5173',
  credentials: true    
}));
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage:storage})
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    success:true,
    image_url:`http://localhost:${PORT}/images/${req.file.filename}`
})
})
const fetchuser = async(req,res,next)=>{
  const token = req.header('auth-token')
  if(!token){
    res.status(401).send({error:"Please login first"})
  }
  else{
    try{
      const data = jwt.verify(token,'secret_ecom')
      req.user = data.user;
      next();
    }
    catch(err){
      console.log(token)
      res.status(401).send({error:'some thing went wrong'})
    }
  }
}
app.post('/removedproduct',async(req,res)=>{
  console.log(req.body)
  await Product.findOneAndDelete({id:req.body.id})
  
})
app.post('/addproduct',async(req,res)=>{
  console.log(req.body)
  let products = await Product.find({})
  let id;
  if(products.length>0){
      let last_product_array = products.slice(-1)
      let last_product = last_product_array[0]
      id = last_product.id+1
  }
  else{
      id = 1;   
  }
  const product = new Product({
    id:id,
    name:req.body.name,
    price:req.body.price,
    discription:req.body.discription,
    image:req.body.image
  })
  
  await product.save()

  res.json({
    message:"Add successfully",     
    success:true
  })
})
app.post('/addtocart', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.id;
    let userData = await User.findById(userId);
    if (!userData.cartData) {
      userData.cartData = {};
    }
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }
    userData.cartData[itemId] += 1;
    await User.findByIdAndUpdate(userId, { cartData: userData.cartData });

    res.json({
      success: true,
      message: "Added"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post('/removefromcart',fetchuser,async(req,res)=>{
   try {
    const userId = req.user.id;
    const itemId = req.body.id;
    let userData = await User.findById(userId);
    if (!userData.cartData) {
      userData.cartData = {};
    }
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }
    userData.cartData[itemId] -= 1;
    await User.findByIdAndUpdate(userId, { cartData: userData.cartData });

    res.json({
      success: true,
      message: "Added"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
}); 
app.get('/getproducts',async (req,res)=>{
  let products = await Product.find({})
  res.json({ 
    success:true,       
    product:products,
  })
})
app.get('/getcart',fetchuser,async(req,res)=>{
    console.log("GetCart")
    let userData = await User.findOne({_id:req.user.id})
    res.json({
      success:true,
      cart:userData.cartData
    })
})
app.post('/login',async(req,res)=>{
  let user = await User.findOne({email:req.body.email})
  if(!user){
    res.json({
      success:false,
      message:'Signup first'
    })
  }
  else{
    const passwordCompare = user.password === req.body.password;
    if(passwordCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom')
      res.json({success:true,token})
    }
  }
})
app.post('/signup',async(req,res)=>{
  console.log(req.body)
  let existuser = await User.findOne({email:req.body.email});
  if(existuser){
    res.json({
      success:false,
      message:'Existing user found with same email'
    })
  }
  else{
   let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0; 
    }
  const user = new User({
    name:req.body.name,
    email:req.body.email,  
    password:req.body.password,
    cartData:cart,
  })
  await user.save()
  const data = {
    user:{
      id:user.id
    }
  }
  const token = jwt.sign(data,'secret_ecom')
  res.json({
    success:true,
    token,
    message:'Signup successfully'
  })
}
}) 
app.listen(PORT, () => { 
  console.log(`Your server is runnning on address http://localhost:${PORT}`)
})