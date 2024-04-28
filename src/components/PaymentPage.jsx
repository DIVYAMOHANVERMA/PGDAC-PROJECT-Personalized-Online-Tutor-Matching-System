import React from 'react';
// import './PaymentPage.css';
import { Link } from 'react-router-dom';

function PaymentPage() {
  return (
    <> 
    <h3 className='payment_title'>MAKE PAYMENT</h3>
    {/* <h3 className='payment_title2'><marquee>YOU CAN USE DEBIT AND CREDIT CARD BOTH</marquee></h3> */}
     <div className="payment-container">
        
        <div className='mainbody'>
        <form className="payment-form">
    <h2 className='paymentbody'>PAYMENT</h2>
      <label htmlFor="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" />

      <label htmlFor="expiryDate">Expiry Date:</label>
      <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" />

      <label htmlFor="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" placeholder="123" />

      <label htmlFor="nameOnCard">Name on Card:</label>
      <input type="text" id="nameOnCard" name="nameOnCard" placeholder="John Doe" />

      <Link to="/PaymentRecipt"><button type="submit">Pay Now</button></Link>
      {/* <Link to="/PaymentRecipt"><button className='coursesBtn'>Pay Now</button></Link> */}
    </form>
    <div className="payment-image-container">
      <img src="https://media.istockphoto.com/id/1296010174/photo/black-credit-card-mock-up.jpg?s=612x612&w=0&k=20&c=XBJrHURBfd87CBzI6CC0WMTKtx_lQ3RJs38I7JIRAFw=" alt="Payment" />
    </div>
        </div>

  </div>
  </>

    
  );
}

export default PaymentPage;
