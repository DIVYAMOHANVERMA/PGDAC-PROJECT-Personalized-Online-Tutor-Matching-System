import React from 'react';
// import './PaymentRecipt.css';
function PaymentReciptPage() {
  return (
    <div className="receipt-container">
      <h2>Payment Receipt</h2>
      <div className="receipt-details">
        <p>Transaction ID: XYZ123</p>
        <p>Amount Paid: $50.00</p>
        <p>Payment Date: February 21, 2024</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default PaymentReciptPage;
