import React from 'react'
import { useStateValue } from "../dataLayer/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({basketKey, id, image, title, price, rating, hideButton}) {

  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = (basketKey) => {
    // remove and item
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      basketKey: basketKey,
      id: id,
    });
  }

  return (
    <div className="checkoutProduct" >
      <img className="checkoutProduct__image" src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {
              // fill with an empty value
              Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))
            }
        </div>
        {!hideButton && (
          <button onClick={ ()=> { 
            console.log("onclick remove ",basketKey); 
            removeFromBasket(basketKey);}}>Remove from basket</button>
        )}
        
      </div>
    </div>
  )
}

export default CheckoutProduct
