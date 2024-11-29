import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ProductContext } from '../../Context/Context';
import IMG from "../../IMG/music.png"
import "./Music.css"

const Music = () => {
    const { products, addToCart, toggleWishlist } = useContext(ProductContext);
    const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const updatedTime = { ...prevTime };
                if (prevTime.seconds > 0) updatedTime.seconds -= 1;
                else if (prevTime.minutes > 0) {
                    updatedTime.minutes -= 1;
                    updatedTime.seconds = 59;
                } else if (prevTime.hours > 0) {
                    updatedTime.hours -= 1;
                    updatedTime.minutes = 59;
                } else if (prevTime.days > 0) {
                    updatedTime.days -= 1;
                    updatedTime.hours = 23;
                }
                return updatedTime;
            }
        );}, 1000);
        return () => clearInterval(timer);
    }, []);
  return (
    <section>
        <Container>
            <Row className='music'>
                <Col xl={6}>
                    <h6>Categories</h6>
                    <h3>Enhance Your<br/> Music Experience</h3>
                    <div className="countdownTow">
                        <div>  
                            <h6>{timeLeft.days}</h6>
                            Days
                        </div>
                        <div>  
                            <h6>{timeLeft.hours}</h6>
                            Hours
                        </div>
                        <div>
                            <h6>{timeLeft.minutes}</h6> 
                            Minutes
                        </div>
                        <div>
                            <h6>{timeLeft.seconds}</h6>
                            Seconds
                        </div>
                    </div>
                    <Button className="view-all-btn px-5">buy now</Button>
                </Col>
                <Col xl={6} className='music-img'>
                    <div className='music-overlay'></div>
                    <img src={IMG} className='w-100' alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Music