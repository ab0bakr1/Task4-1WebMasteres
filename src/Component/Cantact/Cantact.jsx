import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import "./Cantact.css"

const Cantact = () => {
  return (
    <section className='Cantact py-5'>
        <Container>
            <h5 ><span>Home</span> / Cantact</h5>
            <Row className='align-items-center'>
                <Col md={4} sm={12}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <IoCall /><h6>Call To Us</h6>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    <hr />
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <MdEmail /><h6>Write To US</h6>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </Col>
                <Col md={8} sm={12}>
                    <form action="">
                        <div className="d-flex justify-content-between gap-3">
                            <div className="form-group w-100">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group w-100">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group w-100">
                                <input type="number" className="form-control" id="phone" placeholder="Your Phone" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger mt-3 float-end px-5">Send Massage</button>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Cantact