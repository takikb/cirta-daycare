import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

export const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/payment/create-checkout-session",
        {
          product,
          token: await stripe
            .createToken(elements.getElement(CardElement))
            .then(({ token }) => token),
        }
      );

      if (data.success) {
        alert("Payment successful!");
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      setError(error.response.data.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || loading}>
        Pay ${product.price}
      </button>
    </form>
  );
};

/*export const PaymentForm = ({
  onSubmit,
  amount,
  setAmount,
  name,
  setName,
  email,
  setEmail,
  error,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    onSubmit({
      // Call onSubmit function with invoiceData object
      invoiceNumber: "INV-" + Math.random().toString(36).substring(2, 8),
      amount: amount * 100,
      clientName: name,
      clientEmail: email,
      mode: "edahabia",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit">Pay Now</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};
*/
