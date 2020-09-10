import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../dataLayer/StateProvider";

import "./SubTotal.css";
import { getBasketTotal } from "../dataLayer/reducer";

function SubTotal() {

  const[{basket}, dispatch]= useStateValue();
  
  return (
    <div class="subtotal">
      <div class="subtotal__head">
        
      </div>

      <div className="subtotal__body">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/**hw number of items */}
                Subtotal ({basket?.length} items) : <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // hw
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;
