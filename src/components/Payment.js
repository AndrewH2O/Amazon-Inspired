import React, { useState, useEffect } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../dataLayer/reducer";
import { useStateValue } from "../dataLayer/StateProvider";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  // hooks
  const stripe = useStripe();

  // pull in elements incl CardElement
  const elements = useElements();

  // handling cc state
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  // button state
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  // accepting payt
  const [clientSecret, setClientSecret] = useState(true);

  // responds to basket change dependency
  useEffect(() => {
    // change basket need ne secret
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the toatl in a currency subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secret is >>>>>>", clientSecret);


  const handleSubmit = async (event) => {
    //stripe part
    event.preventDefault();
    // avoids multiple clicks to buy btn
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
        // we get the response back destructure out payt confmn details
      })
      .then(({ paymentIntent }) => {
        // payment intent = payment confirmation
          
        // if (result.error) {
        //   // Show error to your customer (e.g., insufficient funds)
        //   console.log("ERROR >> STRIPE >>> ",result.error.message);
        // } else {
        //   // The payment has been processed!
        //   if (result.paymentIntent.status === 'succeeded') {
        //     console.log("OK >> STRIPE >>>",result.paymentIntent.status);
        //     // Show a success message to your customer
        //     // There's a risk of the customer closing the window before callback
        //     // execution. Set up a webhook or plugin to listen for the
        //     // payment_intent.succeeded event that handles any business critical
        //     // post-payment actions.
        //   }
        // }
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: 'EMPTY_BASKET'})

        // navigation
        history.replace("/orders");
      })
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/** Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>St Katharine's & Wapping</p>
            <p>London</p>
            <p>EC3N 4AB</p>
          </div>
        </div>
        {/** Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.basketKey}
                basketKey={item.basketKey}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        </div>

        {/** Paymnet section - paytmrnt method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/** stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"£"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>

              {/** */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
