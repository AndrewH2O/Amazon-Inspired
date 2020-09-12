import React from "react";
import { Link } from "react-router-dom";
import  SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../dataLayer/StateProvider";
import { auth } from "../firebase";

function Header() {

  // [state, dispatch] <--- Es6
  // destructure {basket}
  // dispatch is like a gun
  // get basket
  const[{basket, user}, dispatch]= useStateValue();

  const handleAuthentication = () => {
    if(user) {
       auth.signOut();
    }
  }

  //console.log(basket);

  return (
    <nav className="header">
      {/* logo left image */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link - if no user then we link to login page */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest': user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* Basket icon with number */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            { /* Shopping basket icon  */}
            <ShoppingBasketIcon />
            { /* Number items in basket */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
