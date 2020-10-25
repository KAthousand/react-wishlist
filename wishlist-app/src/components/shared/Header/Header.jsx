import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>Wishlist App</h1>
      </div>
      <div className="nav-links">
        <h2>Lists</h2>
        <h2>Sign Up</h2>
      </div>
    </div>
  );
}

export default Header;
