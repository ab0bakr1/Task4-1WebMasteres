import React from 'react'
import { Container } from 'react-bootstrap'

const Top = () => {
  return (
    <section className='bg-dark'>
      <Container>
        <div className="text-light TOP">
          <div className='d-flex gap-2 m-auto'>
              <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
              <a href="#">ShopNow</a>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <h5>English</h5>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white"/>
            </svg>
          </div>
        </div>
      </Container> 
    </section>
  )
}

export default Top