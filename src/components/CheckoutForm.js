import React from "react";

function CheckoutForm() {
  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="form-container">
        <div className="header"></div>
        <div className="body"></div>
        <div className="footer">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
