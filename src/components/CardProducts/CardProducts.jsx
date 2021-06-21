import React from "react";

import "./CardProducts.css";

/* import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
 */

export default function RecipeReviewCard(props) {

  const handleClick =()=>{
    window.location.href= `/product/${props.id + 1}`
  }

  return (
    <>
      <div className="container-card-product" onClick={handleClick}>
        <div className="card-titulo">{props.name}</div>
        <div><img src={props.img} className="img-card-product"/></div>
        <div className="card-information">
          <div className="card-categoria">Categoria</div>
          <div className="card-categoria-value">{props.category}</div>
        </div>
      </div>
    </>
  );
}
