import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from 'react-icons/fi'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import "./Favorite.css"
import { ProductContext } from '../../Context/Context';
import { AiOutlineHeart } from 'react-icons/ai';

const Favorite = () => {
    const { products, addToCart, wishlist,removeFromFavorites,addToWishlist,removeFromCart,cart} = useContext(ProductContext);
  return (
    <section className='fav py-5'>
        <Container>
            <div className="d-flex align-items-center justify-content-between">
                <h3>Wishlist</h3>
                <button type="button" className='btn btn-litgh'>Move All To Bag</button>
            </div>
            <Row className="products-row">
                {wishlist.map((product) => {
                    const isCart = cart.some((item) => item.id === product.id);
                    return(
                    <Col key={product.id} xl={2} md={3} sm={5}>
                        <Card className="product-card">
                            <div className="discount-badge">-{product.discountPercentage}%</div>
                            <div className="icons">
                                <FaTrashAlt onClick={() => removeFromFavorites(product.id)} />
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
                )})}
            </Row>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex algin-center gap-3 py-3">
                    <span className='mrb3'></span>
                    <h4>Just For You</h4>
                </div>
                <button type="button" className='btn btn-litgh'>See All</button>
            </div>
            <Row className="products-row">
                {products.slice(14,18).map((product) => {  
                    const isFavorite = wishlist.some((item) => item.id === product.id);
                    return (
                    <Col key={product.id} xl={2} md={3} sm={5}>
                        <Card className="product-card">
                            <div className="discount-badge">-{product.discountPercentage}%</div>
                            <div className="icons">
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
                )})}
            </Row>
        </Container>
    </section>
  )
}

export default Favorite