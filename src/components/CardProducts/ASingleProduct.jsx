import React from "react";
import "./ASingleProduct.css";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";


import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function ASingleProduct(props) {

  const [{basket}, dispatch] = useStateValue();
  const max = 10;
  const min = 0;
  const [countItem, setCountItem] = React.useState(0);

  

  const AddItem = ()=>{
    (countItem < max) ? setCountItem(countItem + 1): setCountItem(max);
  }

  const SubstractItem = ()=>{
    (countItem > min) ? setCountItem(countItem - 1): setCountItem(min);
  }
  const addToBasket=()=>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{
        id:props.id,
        name:props.name,
        image:props.img,
        price: props.price,
        description: props.description,
        amount: countItem
      }
    })
  }

  return (
    <>
      <div className="contaniner-ASingleProduct">
        <div className="contenedor-imagen-producto">
          <img src={props.img} alt={`${props.name}-imagen`} className="img-producto" />
        </div>
        <div className="contenedor-informacion-producto d-block">
          <div className="producto-titulo">{props.name}</div>
          <div className="producto-categoria">
            <span className="producto-categoria-titulo">Categoria </span>
            <span className="producto-categoria-texto pl-1">
              {props.category}
            </span>
          </div>
          <div className="producto-categoria">
            <span className="producto-categoria-titulo">Descripcion </span>
            <span className="producto-description pl-1">
              {props.description}
            </span>
          </div>

          <div className="producto-price">
            <span className="producto-price-texto">Precio </span>${props.price}
          </div>
          <div className="producto-btn">
            <div className="d-flex flex-row producto-contador">
              <IconButton onClick={AddItem}>+</IconButton>
              <div className="producto-contenedor-cantidad text-center">{countItem}</div>
              <IconButton onClick={SubstractItem}>-</IconButton>
            </div>
            {
              (countItem>=1) ? (<Button className="btn" onClick={addToBasket}> Add to cart </Button>) : (null)
            }
            
          </div>
          
        </div>
      </div>

    </>
  );
}

export default ASingleProduct;
