import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><img src={Logo} alt="" className='Logo'/></div>
      <div><img src={navProfile} alt="" className='Profile'/></div>
    </div>
  )
}

export default Navbar