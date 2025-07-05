import React from 'react'
import { Link } from 'react-router-dom';
import Product_list from '../../assets/Product_List_icon.svg'
import Add_cart from '../../assets/logo.png'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/create_list"><div className='logo'><img src={Add_cart} alt="" /> <p>Add To Cart</p></div></Link>
        <Link to="/display_list"><div className='logo'><img src={Product_list} alt=""/> <p>Cart List</p></div></Link>
    </div>
  )
}

export default Sidebar