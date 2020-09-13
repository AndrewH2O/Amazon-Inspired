import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../dataLayer/StateProvider";

import "./SubTotal.css";
import { getBasketTotal } from "../dataLayer/reducer";
import { useHistory } from "react-router-dom";


function SubTotal() {

  const history = useHistory();
  const[{basket, user}, dispatch]= useStateValue();
  
  return (
    <div className="subtotal">

      <div className="subtotal__head">
        
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
        
          <button onClick={e => !user?history.push('/login'):history.push('/payment')}>Proceed to Checkout</button>
        
        
      </div>
    </div>
  );
}

export default SubTotal;
