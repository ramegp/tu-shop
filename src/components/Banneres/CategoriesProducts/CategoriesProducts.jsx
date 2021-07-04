import React from "react";
import "./CategoriesProducts.css";

import { Link } from "react-router-dom";

function CategoriesProducts(props) {
  return (
    <Link className="link-container-categories-products">
      <div className="container-categories-products">
        {props.name}
        <div className="categories-products-subrayado"></div>
      </div>
    </Link>
  );
}

export default CategoriesProducts;
