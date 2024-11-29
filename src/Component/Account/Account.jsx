import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductContext } from '../../Context/Context';
import "./Account.css"



const Account = () => {
    const {users} = useContext(ProductContext);
  return (
    <section className='Account py-5'>
        <Container>
            <div className="d-flex align-items-center justify-content-between">
                <h5><span>Home</span> / My Account</h5>
                <h5>Welcome! <span className='text-danger fw-bold'>{users.name}</span></h5>
            </div>
            <Row>
                <Col md={3} sm={0}>
                    <div className="account-menu">
                        <p>Manage My Account</p>
                        <ul>
                            <li>My Profile</li>
                            <li>Address Book</li>
                            <li>My Payment Options</li>
                        </ul>
                        <p>My Orders</p>
                        <ul>
                            <li>My Returns</li>
                            <li>My Cancellations</li>
                        </ul>
                        <p>My WishList</p>
                    </div>
                </Col>
                <Col md={9} sm={12}>
                    <h4 className='text-danger fs-3'>Edit Your Profile</h4>
                    <form action="" className='d-flex flex-column gap-3'>
                        <div className="d-flex align-items-center gap-3 justify-content-between">
                            <div className="form-group w-50">
                                <label htmlFor="name">First Name</label>
                                <input type="text" className="form-control" id="name" placeholder={users.name} />
                            </div>
                            <div className="form-group w-50">
                                <label htmlFor="Lname">Last Name</label>
                                <input type="text" className="form-control" id="Lname" placeholder={users.name} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 justify-content-between">
                            <div className="form-group w-50">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder={users.identifier} />
                            </div>
                            <div className="form-group w-50">
                                <label htmlFor="Address">Address</label>
                                <input type="text" className="form-control" id="Address" placeholder={users.Address} />
                            </div>
                        </div>
                        <div className="form-group">
                            <p>Password Changes</p>
                            <input type="password" className="form-control mb-3" id="Password" placeholder="Current Passwod" />
                            <input type="password" className="form-control mb-3" id="Password" placeholder="New Passwod" />
                            <input type="password" className="form-control mb-3" id="Password" placeholder="Confirm New Passwod" />
                        </div>
                    </form>
                    <div className="d-flex align-items-center justify-content-end gap-3 mt-3">
                        <p className='m-0'>Cancel</p>
                        <button className='btn btn-danger'>Save Changes</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Account