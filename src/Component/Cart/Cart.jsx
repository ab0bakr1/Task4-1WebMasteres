import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ProductContext } from '../../Context/Context';
import "./Cart.css"

const Cart = () => {
    const { cart,setCart } = useContext(ProductContext);
    const handleQuantityChange = (id, newQuantity) => {
        const updatedItems = cart.map((item) =>
          item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
        );
        setCart(updatedItems);
      };
  return (
    <section className='cart py-5'>
        <Container>
            <h5><span>Home</span> / Cart</h5>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                        <td><img src={item.images}/> {item.title}</td>
                        <td>${item.price}</td>
                        <td>
                            <select
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            >
                            {[...Array(10).keys()].map((num) => (
                                <option key={num} value={num + 1}>
                                {num + 1}
                                </option>
                            ))}
                            </select>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between mt-3">
                <button className='btn btn-light'>Return To Shop</button>
                <button className='btn btn-light'>Update Cart</button>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <form action="" className='align-items-center'>
                    <input type="text" placeholder='Coupon Code'/>
                    <button className='btn btn-danger px-3'>Apply Coupon</button>
                </form>
                <div className="cart-total">
                    <p>Cart Total</p>
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
                    <a herf="/Billing">
                        <button className='btn btn-danger'>Procees to checkout</button>
                    </a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Cart