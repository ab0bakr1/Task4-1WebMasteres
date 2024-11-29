import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import IMG from "../../IMG/singup.jpg"
import { ProductContext } from '../../Context/Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"

const Login = () => {
    const { users, login } = useContext(ProductContext);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // التحقق من وجود المستخدم ومطابقة كلمة المرور
        const user = users.find((user) => user.identifier === identifier && user.password === password);
        if (user) {
          login(user); // تسجيل الدخول
          navigate('/'); // الانتقال إلى الصفحة الرئيسية
        } else {
          alert('خطأ في البريد الإلكتروني/رقم الهاتف أو كلمة المرور');
        }
      };
  return (
    <section className='py-5'>
    <Row className='align-items-center'>
        <Col sm={12} md={8} className='d-sm-block d-none'>
            <img src={IMG} className='w-100' alt="" />
        </Col>
        <Col sm={12} md={4} className='Register px-5'>
            <h3>Log in to Exclusive</h3>
            <p>Enter your details below</p>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Phone Number" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-danger py-2 px-5" onClick={handleLogin}>Log in</button>
                    <button type="submit" className="btn btn-link text-danger">Forgot Password?</button>
                </div>
            </form>
        </Col>
    </Row>
    </section>
  )
}

export default Login