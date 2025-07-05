import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import promotionImage from "../../assets/promotion/pro.png"

function Section4() {
    return (
        <>
            <section className='promotion_section' id='Shop'>
                <Container>
                    <Row className='align-item-center'> 
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={promotionImage} className='img-fluid' alt="Promotion" />
                        </Col>
                        <Col lg={6} className='mt-5' >
                            <h2>Nothing brings people together like a good burger</h2>
                            <p>
                                Semper lacus cursus porta primis ligula risus tempus and
                                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                                ipsum porta justo integer ultrice aligula lectus aenean magna
                                and pulvinar purus at pretium gravida
                            </p>
                            <ul>
                                <li>
                                    <p>Fringilla risus, luctus mauris orci auctor purus euismod
                                        pretium purus pretium ligula rutrum tempor sapien</p>
                                </li>
                                <li>
                                    <p>Quaerat sodales sapien euismod purus blandit</p>
                                </li>
                                <li>
                                <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                                    sodales sapien undo pretium a purus mauris</p>
                                </li>    
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg_parallax_scroll'></section>
        </>
    )
}

export default Section4