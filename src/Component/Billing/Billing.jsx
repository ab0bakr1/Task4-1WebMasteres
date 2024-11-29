import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductContext } from '../../Context/Context';
import Bank1 from "../../IMG/Bank1.png"
import Bank2 from "../../IMG/Bank2.png"
import Bank3 from "../../IMG/Bank3.png"
import Bank4 from "../../IMG/Bank4.png"
import "./Billing.css"


const Billing = () => {
    const { cart } = useContext(ProductContext);
  return (
    <section className='Billing py-5'>
        <Container>
            <h5><span>Account / My Account / Product / View Cart</span> / CheckOut</h5>
            <h4 className='mt-5'>Billing Details</h4>
            <Row>
                <Col md={6} sm={12}>
                    <form className='d-flex flex-column gap-3' action="">
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Company">Company Name</label>
                            <input type="text" className="form-control" id="Company"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Street Address*</label>
                            <input type="text" className="form-control" id="address"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Apartment">Apartment, floor, etc. (optional)</label>
                            <input type="text" className="form-control" id="Apartment"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Town/City*</label>
                            <input type="text" className="form-control" id="city"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Number">Phone Number*</label>
                            <input type="text" className="form-control" id="Number"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email Address*</label>
                            <input type="text" className="form-control" id="Email"  />
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" name="save" id="save" />
                            <label className='text-muted' htmlFor="save">Save this information for faster check-out next time</label>
                        </div>
                    </form>
                </Col>
                <Col md={6} sm={12} className='d-flex flex-column justify-content-center align-items-center'>
                    <table>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td className='pe-5'><img src={item.images}/> {item.title}</td>
                                <td>${item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="Billing-total">
                    <div className="d-flex justify-content-between">
                        <p>Subtotal:</p>
                        <p>${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p>Shipping::</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p>Total:</p>
                        <p>${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <form action="">
                        <div className="d-flex gap-3">
                            <input type="radio" name="Billing" id="Bank" /> <span htmlFor="Bank">Bank <span><img src={Bank1} alt="" /><img src={Bank2} alt="" /><img src={Bank3} alt="" /><img src={Bank4} alt="" /></span></span>
                        </div>
                        <div className="d-flex gap-3">
                            <input type="radio" name="Billing" id="Cash" /> <span htmlFor="Cash">Cash on delivery</span>
                        </div>
                        <div className="d-flex justify-content-between gap-3 mt-3">
                            <input type="text" placeholder='Coupon Code'/>
                            <button className='btn btn-danger px-3'>Apply Coupon</button>
                        </div>
                    </form>
                    <button className='btn btn-danger mt-3'>Place Order</button>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Billing