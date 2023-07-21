import React, { useState } from "react";
import CartPage from "./CartPage";
import PaymentPage from "./PaymentPage";
import ThankYou from "./ThankYou";

function CheckoutForm() {
  const [page, setPage] = useState(0);

  const CheckoutFormTitle = [
    "Cart Page",
    "Payment Page",
    "Transaction Details",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <CartPage />;
    } else if (page === 1) {
      return <PaymentPage />;
    } else {
      return <ThankYou />;
    }
  };

  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="form-container">
        <div className="header">
          <h1>{CheckoutFormTitle[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Previous
          </button>
          <button
            disabled={page === 2}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
