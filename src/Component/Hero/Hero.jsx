import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroImg from "../../IMG/Hero.png"
import "./Hero.css"

const Hero = () => {
  return (
    <section>
        <Container >
            <Row xl={2} md={2} sm={1}>
                <Col className='menu px-4' xl={3} md={3} sm={12}>
                    <ul>
                        <li className='d-flex justify-content-between'>Woman’s Fashion <span><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></li>
                        <li className='d-flex justify-content-between'>Men’s Fashion <span><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby’s & Toys</li>
                        <li>Groceries & Pets</li>
                        <li>Health & Beauty</li>
                    </ul>
                </Col>
                <Col className='px-4 position-relative' xl={9} md={9} sm={12}>
                    <div className="baneer">
                        <div className="baneer-info">
                            <div className="fs-3">
                                <FontAwesomeIcon icon={faApple} />
                                <span className='px-4'>iPhone 14 Series</span>
                            </div>
                            <h2 className='fs-1 w-75 w-lg-100'>Up to 10% off Voucher</h2>
                            <div className="">
                                <a className='me-4 text-light'>Shop Now</a>
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="bottom">
                        <div className="banner-bottom">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Hero