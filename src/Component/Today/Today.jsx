import React, { useContext } from 'react'
import "./Today.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ProductContext } from '../../Context/Context';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Today = () => {
    const navigate = useNavigate();
    const [swiperRef, setSwiperRef] = useState(null);
    const { products, addToCart, removeFromFavorites,addToWishlist, wishlist,cart, removeFromCart } = useContext(ProductContext);
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
    const handleGoToProduct = (id) => {
        navigate(`/product/${id}`);
    };
  return (
    <section className='today'>
        <Container>
            <Row className="today-top">
                <div className="d-flex algin-center gap-3 py-3">
                    <span className='mrb3'></span>
                    <h4>Today's</h4>
                </div>
                <div className="d-flex algin-center gap-5">
                    <h2>Flash Sales</h2>
                    <div className="countdown">
                        <div>Days  
                            <h6>{timeLeft.days}</h6>
                        </div>
                        <div>Hours  
                            <h6>{timeLeft.hours}</h6>
                        </div>
                        <div>Minutes
                            <h6>{timeLeft.minutes}</h6> 
                        </div>
                        <div>Seconds
                            <h6>{timeLeft.seconds}</h6>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="products-row">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper py-5"
                > 
                    {products.slice(0, 5).map((product) => {
                        const isFavorite = wishlist.some((item) => item.id === product.id);
                        const isCart = cart.some((item) => item.id === product.id);
                        return (         
                        <SwiperSlide>    
                            <Col onClick={() =>handleGoToProduct(product.id)} key={product.id} sm={12} md={12}>
                                <Card className="product-card">
                                    <div className="discount-badge">-{product.discountPercentage}%</div>
                                    <div className="icons">
                                        <AiOutlineEye />
                                        {isFavorite ? <FaTrashAlt onClick={() => removeFromFavorites(product.id)}/> : <AiOutlineHeart onClick={() => addToWishlist(product)}  /> }
                                    </div>
                                    <Card.Img variant="top" src={product.images} className="product-image" />
                                    <Button variant="dark" className="add-to-cart-btn" onClick={ isCart ? () => removeFromCart(product.id) : () => addToCart(product) }>
                                        <FiShoppingCart /> {isCart ? "Remove From Cart" : "Add To Cart"}
                                    </Button>
                                    <Card.Body>
                                        <div className="product-title">{product.title}</div>
                                        <div className="price-info">
                                            <span className="price">${product.price}</span>
                                            <span className="old-price">${product.discountPercentage}</span>
                                        </div>
                                        <div className="rating">{'⭐'.repeat(product.rating)}<span>({product.rating})</span></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                    )})}
                </Swiper>
            </Row>
            <Button variant="danger" className="view-all-btn">View All Products</Button>
        </Container>
        <hr className='mt-5' />
    </section>
  )
}

export default Today