import React from "react";
import "./CheckoutDesktop.css";
import Grid from "@material-ui/core/Grid";
import CardCheckout from "../CardCheckout/CardCheckout";
import BuysData from "../BuysData/BuysData";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";



import {UseCart} from '../../../provider/CarritoContexto'



const ref = React.createRef();

function CheckoutDesktop() {

  const {cart} = UseCart();




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
