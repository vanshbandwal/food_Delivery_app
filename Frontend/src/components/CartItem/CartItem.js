import React, { useContext } from 'react'
import './CartItem.css'
import { shopcontext } from '../../store/context';

const CartItem = () => {
    const { cartItems, removeFromCart,getTotalCartAmount, mockData } =
        useContext(shopcontext);
        console.log(mockData)
  return (
    <div className='CartItem'>
      <h2 className='heading'>Your Cart</h2>
      <hr/>
      <div className='cartitem-format-main'>
        <div>Photo</div>
        <div>Name</div>
        <div>Price</div>
        <div>Qty</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      {mockData.map((e)=>{
        if(cartItems[e.id] > 0){
          return<div className='cartitem-format-main cartitem-format'>
            <div><img src={e.image} className='carticon-product-icon' alt=' '/></div>
            <div>{e.name}</div>
            <div>{e.price}</div>
            <div>{cartItems[e.id]}</div>
            <div>{e.price * cartItems[e.id]}</div>
            <div className='' onClick={()=>removeFromCart(e.id)} > X </div>
          </div>
        } 
        return null
      })}
        <div className='cartitem-dowm'>
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
              
            </div>
    </div>
  )    
}

export default CartItem