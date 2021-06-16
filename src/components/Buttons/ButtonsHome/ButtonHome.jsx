import React from "react";
import './ButtonHome.css'
import { Link } from "react-router-dom";

function ButtonHome() {
  return (
    <Link to="/shop" className="remove-txt-decoration size-btn-home">
      <button className="btn-home">Shop</button>
    </Link>
  );
}

export default ButtonHome;
