import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png"
import "../../styles/HeaderStyle.css"

const NavHeader = () => {
    const [nav , setnav] = useState(false);
    //scroll
  const changeValueOnScroll = ()=>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setnav(true) : setnav(false)
  }
  window.addEventListener("scroll",changeValueOnScroll)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : " "}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link className='logo'>
              <img src={Logo} alt="Logo" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
      </Navbar>
    </header>
  )
}

export default NavHeader