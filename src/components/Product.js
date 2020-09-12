import React from "react";
import "./Product.css";
import { useStateValue } from "../dataLayer/StateProvider";

// we destructure props to pull out each piece
function Product({ key, id, title, image, price, rating }) {
  // access to store
  // dispatch item to data layer
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    const basketKey = basket.length + 1;
    //add item to basket
    // dispatch action
    // note as our key names in the object below are the same as values we can just remove the duplication
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        basketKey: basketKey,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product" easing="ease_out">
      <div className="product__infoOuter">
        <div className="product__info">
          <p className="product__infoTitle">{title}</p>
          <p className="product__price">
            <small>£</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {
              // fill with an empty value
              Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))
            }
          </div>
        </div>
        <img src={image} alt="" />
      </div>

      {/**dispatch action and listen to action in reducer */}
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
