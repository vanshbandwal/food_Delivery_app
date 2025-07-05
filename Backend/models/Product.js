const mongoose = require('mongoose')

const product_schema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Product = mongoose.model("Product",product_schema)
module.exports = Product