import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",

  });
  
  }
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p><Link to='tel:999-888-777' className='calling btn btn_red px-2 rounded' style={{ background: "red", color: "white", fontWeight: "400" }}>
                  999-888-7777
                </Link></p>
              </div>
            </Col>
            <Col lg={3} sm={6} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>5505 Waterford District</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-youtube'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

        </Container>
      </footer>
      {/* scroll to top */}
      <div className='scroll_top' onClick={scrollTop}>
        <i className='bi bi-arrow-up'></i>
      </div>
    </>

  )
}

export default Footer