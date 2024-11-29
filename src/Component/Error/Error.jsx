import React from 'react'
import { Container } from 'react-bootstrap'
import "./Error.css"

const Error = () => {
  return (
    <section className='Error py-5'>
        <Container>
            <h5><span>Home</span> / 404 Error</h5>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
                <h2 className='fw-bold'>404 Not Found</h2>
                <p>Your visited page not found. You may go home page.</p>
                <a className='text-decoration-none mt-5' href="/">
                    <button className="btn btn-danger px-5 py-2">Back to home page</button>
                </a>
            </div>
        </Container>
    </section>
  )
}

export default Error