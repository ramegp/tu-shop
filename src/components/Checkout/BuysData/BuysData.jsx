import React from "react";
import "./BuysData.css";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import { useStateValue } from "../../../StateProvider";
import { UseCart } from "../../../provider/CarritoContexto";
function BuysData() {

  const {cart, CalculatePrice } = UseCart();


  const [{basket}, dispatch] = useStateValue();
  const [total, setTotal ] = React.useState(0)

  const obtenerTotal = () => {
    setTotal(CalculatePrice())
  }
  React.useEffect(()=>{
    obtenerTotal()
  },[cart])

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="p">
        Informacion de la compra
      </Typography>
      <Typography variant="h7" color="textSecondary" component="p" className="d-flex justify-content-around">
        <span>Items</span>
        <span>{cart?.length}</span>
      </Typography>
      <Typography variant="h5" color="textSecondary" component="p" className="d-flex justify-content-around">
        <span>Total</span>
        <span>{total}</span>
      </Typography>
      <Button variant="contained" color="secondary" className="bg-btn-checkout">
        Comprar
      </Button>
    </Container>
  );
}

export default BuysData;
