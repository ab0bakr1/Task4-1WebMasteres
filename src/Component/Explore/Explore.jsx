import React, { useContext } from 'react'
import "./Explore.css"
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


const Explore = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const { products, addToCart, addToWishlist, wishlist, removeFromFavorites, removeFromCart,cart } = useContext(ProductContext);
  return (
    <section className='today'>
        <Container>
            <Row className="today-top">
                <div className="d-flex algin-center gap-3 py-3">
                    <span className='mrb3'></span>
                    <h4>Our Products</h4>
                </div>
                <div className="d-flex algin-center gap-5">
                    <h2>Explore Our Products</h2>
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
                    {products.slice(8, 12).map((product) => {
                        const isFavorite = wishlist.some((item) => item.id === product.id);
                        const isCart = cart.some((item) => item.id === product.id);
                        return(
                            <SwiperSlide>    
                                <Col key={product.id} sm={12} md={12}>
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
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    className="mySwiper"
                > 
                    {products.slice(13, 17).map((product) => {
                        const isFavorite = wishlist.some((item) => item.id === product.id);
                        return(
                    <SwiperSlide>    
                        <Col key={product.id} sm={12} md={12}>
                            <Card className="product-card">
                                <div className="discount-badge">-{product.discountPercentage}%</div>
                                <div className="icons">
                                    <AiOutlineEye />
                                    {isFavorite ? <FaTrashAlt onClick={() => removeFromFavorites(product.id)}/> : <AiOutlineHeart onClick={() => addToWishlist(product)}  /> }
                                </div>
                                <Card.Img variant="top" src={product.images} className="product-image" />
                                <Button variant="dark" className="add-to-cart-btn">
                                    <FiShoppingCart /> Add To Cart
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
    </section>
  )
}

export default Explore