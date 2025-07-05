import { createContext, useEffect, useState } from "react";
import axios from 'axios';
  export const shopcontext = createContext({
    
})
let cart = {}
const getdefaultcart = ()=>{
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [mockData,setmockData] = useState([])        
    const [cartItems, setCartItems] = useState(getdefaultcart);
    const get = async()=>{
        const res = await axios.get('http://localhost:3000/getproducts')
        setmockData(res.data.product)
    }
    const getcart = async() =>{
        if(localStorage.getItem('auth-token')){
            const res = await axios.get('http://localhost:3000/getcart',{
            headers:{
                       Accept:'application/form-data',
                       'auth-token':`${localStorage.getItem('auth-token')}`,
                       'Content-Type':'application/json' 
        },
        })
        setCartItems(res.data.cart)
        }
        else{
            setCartItems([])
        }
    }
    useEffect(()=>{
        get()
        getcart()
    },[])
   

  const addToCart = async(id) => {
    setCartItems((prev)=>({ ...prev, [id]: prev[id] + 1 }))
    if(localStorage.getItem('auth-token')){
        let res = await axios.post('http://localhost:3000/addtocart',{id},{
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            }
        })
    }
    else{
        alert('!Please login first.')
    }
  };
  const removeFromCart = async(id) => {
    setCartItems((prev)=>({ ...prev, [id]: prev[id] - 1 }))
    if(localStorage.getItem('auth-token')){
        let res = await axios.post('http://localhost:3000/removefromcart',{id},{
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            }
        })
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = mockData.find((product) => product.id === Number(item))
            totalAmount += itemInfo.price * cartItems[item];
            console.log(itemInfo)
        }
    }
    return totalAmount;
}
const getTotalCartItem = ()=>{
    let totalCartItem = 0
    for(const item in cartItems){
        if(cartItems[item] > 0){
            totalCartItem += cartItems[item]
        }
    }
    return totalCartItem
}

  
    const contextValue = {mockData,addToCart,removeFromCart,cartItems,getTotalCartAmount,getTotalCartItem}
    
    return(
    <shopcontext.Provider value = {contextValue}>
        {props.children}
    </shopcontext.Provider>
    )
      
}
export default ShopContextProvider; 