import React from "react";

function PaymentPage({ formData, setFormData }) {
  return (
    <div className="payment-container">
      <input type="number" placeholder="Card Number" />
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Expiration Date" />
      <input type="number" placeholder="CVV" />
    </div>
  );
}

export default PaymentPage;
