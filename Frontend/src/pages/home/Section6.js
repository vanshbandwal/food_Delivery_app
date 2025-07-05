import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import user1 from "../../assets/blog/review-author-1.jpg"
import user2 from "../../assets/blog/review-author-2.jpg"
import user3 from "../../assets/blog/review-author-3.jpg"
import user4 from "../../assets/blog/review-author-5.jpg"


function Section6() {
    return (
        <section className='blog_section' id='Blog'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between ' style={{flexDirection:"column"}}>
                                    <div className="user_img">
                                        <img src={user1} className="img-fluid" alt="brand-1" />
                                    </div>
                                    <p> Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between ' style={{flexDirection:"column"}}>
                                    <div className="user_img">
                                        <img src={user2} className="img-fluid" alt="brand-2" />
                                    </div>
                                    <p> Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between ' style={{flexDirection:"column"}}>
                                    <div className="user_img">
                                        <img src={user3} className="img-fluid" alt="brand-3" />
                                    </div>
                                    <p> Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex align-items-center justify-content-between ' style={{flexDirection:"column"}}>
                                    <div className="user_img">
                                        <img src={user4} className="img-fluid" alt="brand-4" />
                                    </div>
                                    <p> Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque </p>
                                    <div className='item_rating mb-2'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6