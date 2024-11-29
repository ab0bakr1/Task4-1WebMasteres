import React, { useContext } from 'react'
import "./Products.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ProductContext } from '../../Context/Context';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';

const Products = () => {
    const { products, addToCart, addToWishlist,wishlist,removeFromFavorites } = useContext(ProductContext);
  return (
    <section className='today'>
        <Container>
            <Row className="today-top">
                <div className="d-flex algin-center gap-3 py-3">
                    <span className='mrb3'></span>
                    <h4>This Month</h4>
                </div>
                <div className="d-flex algin-center justify-content-between mb-5">
                    <h2>Best Selling Products</h2>
                    <Button variant="danger" className="view-all-btn m-0 px-5">View All</Button>
                </div>
            </Row>
            <Row className="products-row">
                {products.slice(20, 25).map((product) => {
                    const isFavorite = wishlist.some((item) => item.id === product.id);
                    return(
                    <Col key={product.id} xl={2} md={3} sm={5}>
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
                )})}
            </Row>
        </Container>
        <hr className='mt-5' />
    </section>
  )
}

export default Products