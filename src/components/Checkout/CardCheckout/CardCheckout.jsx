import React, {useState} from "react";
import "./CardCheckout.css";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import RemoveIcon from '@material-ui/icons/Remove';

import {UseCart} from '../../../provider/CarritoContexto';

function CardCheckout(props) {

  const {removeItemFromArr} = UseCart();

  const MIN = 1;
  const MAX = 10;

  const [count, setCount] = useState(props.amount);

  const handleAdd = () =>{
    (count < MAX) ? setCount( count + 1 ) : setCount(10)
  }

  const handleSubtract =()=>{
    (count > MIN) ? setCount( count - 1 ) : setCount(1)
  }
  return (
    <div className="d-flex checkout-card">
      <div className="container-checkout-card-img">
        <img src={props.image} alt="" className="card-img-checkout"/>
      </div>
      <div className="d-flex container-checkout-card-information">
        <div className="container-checkout-card-information-titulo">
          {props.name}
        </div>
        <div className="d-flex container-checkout-card-information-money">
          <div className="checkout-card-price">Precio</div>
          <div>${props.price}</div>
        </div>
        <div className="d-flex container-checkout-card-information-money">
          <div className="checkout-card-cantidad-text">Cantidad</div>
          <div className="checkout-card-cantidad-text">{count}</div>
        </div>
        <div className="d-flex justify-content-center">
          <Grid item xs={3}>
            <IconButton onClick={handleSubtract}>
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton onClick={handleAdd}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton>
              <DeleteOutlineIcon onClick={()=>{removeItemFromArr({id:props.id})}}/>
            </IconButton>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CardCheckout;
