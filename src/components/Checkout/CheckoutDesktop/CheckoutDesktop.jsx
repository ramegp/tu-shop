import React from "react";
import "./CheckoutDesktop.css";
import Grid from "@material-ui/core/Grid";
import CardCheckout from "../CardCheckout/CardCheckout";
import BuysData from "../BuysData/BuysData";
import Typography from "@material-ui/core/Typography";
import { Container } from '@material-ui/core';

import { useStateValue } from '../../../StateProvider'



function CheckoutDesktop() {

  const [{basket}, dispatch] = useStateValue();


  return (
    <Container maxWidth="xl" className="container-checkout-desktop">
            <Grid container spacing={2}>
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
        >
          {basket?.map((item)=>(
            <CardCheckout name={item.name} price={item.price} image={item.image}/>
          ))}
          {/* <CardCheckout />
          <CardCheckout />
          <CardCheckout /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
            <BuysData />
        </Grid>
      </Grid>
    </Container>

  );
}

export default CheckoutDesktop;
