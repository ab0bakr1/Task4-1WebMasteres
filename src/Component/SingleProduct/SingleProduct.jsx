import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { GiSelfLove } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import "./SingleProduct.css"
import { AiOutlineEye, AiOutlineHeart, AiOutlineReload } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';


const SingleProduct = () => {
    const { addToCart, addToWishlist, removeFromCart, removeFromFavorites, setProduct, product, wishlist,products } = useContext(ProductContext);
    const { id } = useParams();
    const [Quantity, setQuantity]  = useState(1);
    const handlequantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    };
    const handlequantityminus = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id, setProduct]);
    if (!product) {
        return <p>Loading...</p>;
    }
    console.log(product)

  return (
    <section className='SingleProduct py-5'>
        <Container>
            {product ? (
                <Row className='align-items-center'>
                    <Col className='small-img d-flex flex-column gap-3' sm={6} md={2}>
                        <img src={product.images} alt="" />
                        <img src={product.images} alt="" />
                        <img src={product.images} alt="" />
                        <img src={product.images} alt="" />
                    </Col>
                    <Col className='big-img' sm={6} md={5}>
                        <img src={product.images} alt="" />
                    </Col>
                    <Col sm={12} md={5}>
                        <h3>{product.title}</h3>
                        <div className="rating">{'⭐'.repeat(product.rating)}</div>
                        <div className="price">${product.price}</div>
                        <p>{product.description}</p>
                        <hr />
                        <div className="color d-flex align-items-center gap-1 mb-3">colours:<span className='bg-danger'></span><span className='bg-info'></span></div>
                        <div className="size d-flex align-items-center gap-1 mb-3">sizes:<span>xs</span><span>s</span><span>m</span><span>l</span><span>xl</span></div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="quantity">
                                <button onClick={handlequantityminus} className="minus btn">-</button>
                                <span>{Quantity}</span>
                                <button onClick={handlequantity} className="plus btn">+</button>
                            </div>
                            <button className="btn btn-danger px-5">Buy Now</button>
                            <button className="btn btn-danger" onClick={() => addToWishlist(product)}><GiSelfLove /></button>
                        </div>
                        <div className="Features">
                            <div className="d-flex align-items-center gap-3">
                                <FaTruckFast />
                                <div className="">
                                    <h6>Free Delivery</h6>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <hr className='m-2' />
                            <div className="d-flex align-items-center gap-3">
                                <AiOutlineReload />
                                <div className="">
                                    <h6>Return Delivery</h6>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            ) : (
                <div className="text-center">
                    <p>Loading product details...</p>
                </div>
            )}
            <div className="d-flex algin-center gap-3 py-3">
                <span className='mrb3'></span>
                <h4>Related Item</h4>
            </div>
            <Row className="products-row">
                {products.slice(25,30).map((product) => {
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
    </section>
  )
}

export default SingleProduct