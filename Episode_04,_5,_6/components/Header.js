import React, { useState } from "react";
import { LOGO_URL } from "../src/utils/constants";
const Header = () => {
  const [login, setlogin] = useState("Login");
  const [bacground, setBackground] = useState("rgb(0, 170, 255)");

  const handleClick = () => {
    if (login === "Login") {
      setlogin("Logout")
      setBackground("red");
    } else {
      setlogin("Login")
      setBackground("rgb(0, 170, 255)");
    }
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            style={{ background: `${bacground}` }}
            onClick={handleClick}
            className="login"
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
