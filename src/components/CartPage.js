import React from "react";

function CartPage({ formData, setFormData }) {
  return (
    <div className="cart-container">
      <input
        type="text"
        placeholder="Name"
        value={formData.customerName}
        onChange={(event) =>
          setFormData({ ...formData, customerName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(event) =>
          setFormData({ ...formData, location: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Extra note"
        value={formData.note}
        onChange={(event) =>
          setFormData({ ...formData, note: event.target.value })
        }
      />
    </div>
  );
}

export default CartPage;
