import React from "react";

import "./CardProducts.css";
import { Link } from "react-router-dom";


export default function RecipeReviewCard(props) {
  return (
    <>
      <Link className="card-product-link" to={`/choose-restaurant/${props.resto}/${props.id}`}>
        <div className="container-card-product">
          <div className="card-titulo">{props.name}</div>
          <div>
            <img src={props.img} alt={`imagen-${props.name}`} className="img-card-product" />
            
          </div>
          <div className="card-information">
            <div className="card-categoria">Categoria</div>
            <div className="card-categoria-value">{props.category}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
