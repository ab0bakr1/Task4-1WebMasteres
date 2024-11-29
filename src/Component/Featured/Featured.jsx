import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Featured1 from "../../IMG/Featured1.png"
import Featured2 from "../../IMG/Featured2.png"
import Featured3 from "../../IMG/Featured3.jpg"
import Featured4 from "../../IMG/Featured4.png"
import "./Featured.css"

const Featured = () => {
  return (
    <section className='featured'>
        <Container>
            <Row className="today-top">
                <div className="d-flex algin-center gap-3 py-3">
                    <span className='mrb3'></span>
                    <h4>Featured</h4>
                </div>
                <div className="d-flex algin-center gap-5">
                    <h2>New Arrival</h2>
                </div>
            </Row>
            <Row className='gap-4 justify-content-center' xl={2} md={2} sm={1}>
                <Col xs={12} md={12} xl={5} className='featured-card'>
                    <h6>PlayStation 5</h6>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="">Shop Now</a>
                    <img src={Featured4} className='w-100' alt="" />
                </Col>
                <Row className='justify-content-between'>
                    <Col xs={12} md={12} xl={12}>
                        <Row>
                            <Col xs={12} md={12} className='featured-card'>
                                <h6>Women’s Collections</h6>
                                <p>Featured woman collections that give you another vibe.</p>
                                <a href="">Shop Now</a>
                                <img src={Featured3} className='w-100' alt="" />
                            </Col>
                        </Row>
                        <Row className='justify-content-between'>
                            <Col xs={12} md={5} className='featured-card'>
                                <h6>Speakers</h6>
                                <p>Amazon wireless speakers</p>
                                <a href="">Shop Now</a>
                                <img src={Featured2} className='w-100' alt="" />
                            </Col>
                            <Col xs={12} md={5} className='featured-card'>
                                <h6>Perfume</h6>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <a href="">Shop Now</a>
                                <img src={Featured1} className='w-100' alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    </section>

  )
}

export default Featured