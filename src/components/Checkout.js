import React from "react";
import SubTotal from "./SubTotal";
import { useStateValue } from "../dataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from 'react-flip-move';
import "./Checkout.css";
import "./Animate.css";

function Checkout() {

  const [{basket, user },dispatch] = useStateValue();
  
  // const FancyCheckoutProduct = forwardRef((item, ref)=>(
  //   <CheckoutProduct ref={ref} key={item.basketKey} basketKey={item.basketKey} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}></CheckoutProduct>
  // ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          <FlipMove>
          { basket.map (item => (
            <div key={item.basketKey}>
            <CheckoutProduct key={item.basketKey} basketKey={item.basketKey} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}></CheckoutProduct>
            </div>
          ))}
          </FlipMove>
          
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal/>
      </div>
    </div>


  );
}

export default Checkout;
