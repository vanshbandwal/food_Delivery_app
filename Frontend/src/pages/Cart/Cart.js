import React from "react";
import "./Cart.css"; // Make sure this path matches your folder structure

import Footer from "../../components/layout/footer";
import CartItem from "../../components/CartItem/CartItem";
import NavHeader from "../../components/layout/cartHeader";

const Cart = () => {

  return (<div>
  <NavHeader/>
   
  <CartItem/>

  <Footer/>
    </div>
  );
};

export default Cart;
