import React,{useEffect,useState} from "react";
import "./CheckoutDesktop.css";
import Grid from "@material-ui/core/Grid";
import CardCheckout from "../CardCheckout/CardCheckout";
import BuysData from "../BuysData/BuysData";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import { useStateValue } from "../../../StateProvider";

import {UseCart} from '../../../provider/CarritoContexto'


import Pdf from "react-to-pdf";

const ref = React.createRef();

function CheckoutDesktop() {

  const {cart} = UseCart();

  const [{ basket }, dispatch] = useStateValue();

  const [arr, setArr] = useState([])

  /* useEffect(() => {
    setArr(cart)
    
  }, [cart]) */

  return (
    <Container maxWidth="xl" className="container-checkout-desktop mb-8">
      <Grid container spacing={2} ref={ref}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textSecondary" component="p">
            Contenido Carrito
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          className="d-flex justify-content-center flex-wrap"
          id="padreCardsCheckout"
          
        >
          {cart?.map((item) => (
            <CardCheckout
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              amount={item.amount}
              id={item.id}
            />
          ))}
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <BuysData referencia={ref} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckoutDesktop;
