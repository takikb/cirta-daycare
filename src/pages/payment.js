import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export const Payment = () => {
  const makePayment = async () => {
    const stripePromise = await loadStripe(
      "pk_test_51N3N7mBzZpaOtO8UJKQxy6o4Po8DwzywH3GgEE1DM2abSxqa05qtahNkKdzKOYGeCw9glrxt0aUV6cvOs5G5DcOR00fbdqBiZy"
    );

    const product = [{ name: "Your Product", price: 10 }];

    const headers = {
      "Content-type": "application/json",
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/payment/create-checkout-session"
      );

      const session = await response.data;

      const result = stripePromise.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <>
      <button onClick={makePayment}>checkout</button>
    </>
  );
};
/*
{
  tru && (
    <Elements stripe={stripePromise}>
      <PaymentForm product={product} />
    </Elements>
  );
}
/*  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [paymentLinkUrl, setPaymentLinkUrl] = useState("");
  const [error, setError] = useState(null);

  const getChargilyToken = async () => {
    try {
      const response = await axios.get("/api/get-chargily-token"); // Replace with your backend's endpoint
      return response.data.token;
    } catch (error) {
      console.error("Error fetching Chargily token:", error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };

  const handleCreateCheckout = async () => {
    const token = await getChargilyToken();
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.post(
        "http://localhost:3001/payment/api/create-checkout",
        {
          headers,
        },
        {
          items: [
            {
              price: "PRICE_ID",
              quantity: 1,
            },
          ],
          success_url: "http://localhost:3000/",
          failure_url: "http://localhost:3000/admission",
          payment_method: "edahabia",
          locale: "en",
          pass_fees_to_customer: true,
          shipping_address: "123 Test St, Test City, DZ",
          collect_shipping_address: true,
          metadata: {
            order_id: "123456",
          },
        }
      );
      setCheckoutUrl(response.data.checkoutUrl);
    } catch (error) {
      console.error(error);
      setError("Failed to create checkout");
    }
  };

  const handleCreatePaymentLink = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/payment/api/create-payment-link",
        {
          name: "Product Payment",
          items: [
            {
              price: "PRICE_ID",
              quantity: 1,
              adjustable_quantity: false,
            },
          ],
          after_completion_message: "Thank you for your purchase!",
          locale: "en",
          pass_fees_to_customer: true,
          collect_shipping_address: true,
          metadata: {
            campaign: "Summer Sale",
          },
        }
      );
      setPaymentLinkUrl(response.data.paymentLinkUrl);
    } catch (error) {
      console.error(error);
      setError("Failed to create payment link");
    }
  };

  return (
    <div>
      <button onClick={handleCreateCheckout}>Create Checkout</button>
      {checkoutUrl && <p>Checkout URL: {checkoutUrl}</p>}

      <button onClick={handleCreatePaymentLink}>Create Payment Link</button>
      {paymentLinkUrl && <p>Payment Link URL: {paymentLinkUrl}</p>}

      {error && <p>{error}</p>}
    </div>
  );
};*/
