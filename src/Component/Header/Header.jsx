import React, { useContext, useEffect } from "react";
import Top from "./Top";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { ProductContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import User from "./User";

function Header() {

    const { currentUser, logout,wishlist } = useContext(ProductContext);
    const navigate = useNavigate();
    return (
        <header>
            <Top />
            <Container>
                <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-between gap-5 py-3">
                    <Navbar.Brand href="#home" className="fs-2 fw-bold">Exclusive</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-2 gap-md-5 my-2 my-lg-0">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Cantact">contact</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/SingUp">sing up</Nav.Link>
                        </Nav>
                        <div className="d-flex gap-3 icon">
                            <div className="search">
                                <input type="text" placeholder="What are you looking for?" />
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className="cart">
                                <a href="/Cart"><FontAwesomeIcon icon={faCartShopping} /></a>
                            </div>
                            <div className="wishlist">
                                <a href="/Wishlist"><FontAwesomeIcon icon={faHeart}  /><span>{wishlist.length}</span></a>
                            </div>
                            <User />
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <hr />
        </header>
    )
}
export default Header;