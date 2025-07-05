import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"



const Section1 = () => {
    return (
        <section className='hero_section ' id='Home'>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 mb-lg-0'>
                        <div className='position-relative'>
                            <img src={Burger} className='img-fluild Burger_img' alt='Hero' />
                            <div className='price_badge'>
                                <div className='badge_text'>
                                    <h4 className='h4_xs'>Only</h4>
                                    <h3 className='h3_xs'>$6.99</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='hero_text text-center'>
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Oninon</h2>
                            <p className='text-white pt-2 pb-4' >
                                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                viverra tortor in iaculis pretium at magna mauris ipsum primis
                                rhoncus feugiat
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1