import React from "react";
import "./BuysData.css";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useStateValue } from "../../../StateProvider";
import { UseCart } from "../../../provider/CarritoContexto";
import { getFirestore } from "../../../firebase/firebase";
import firebase from "firebase";
import "firebase/firestore";

function BuysData() {
  const { cart, CalculatePrice } = UseCart();

  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = React.useState(0);

  const obtenerTotal = () => {
    setTotal(CalculatePrice());
  };
  React.useEffect(() => {
    obtenerTotal();
  }, [cart]);

  function cargarEnLaBase() {
    const db = getFirestore();
    const orders = db.collection("orders");
    
    const newORder = {
      buyer: "Ramiro",
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };
    orders
      .add(newORder)
      .then(({ id }) => {
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="p">
        Informacion de la compra
      </Typography>
      <Typography
        variant="h7"
        color="textSecondary"
        component="p"
        className="d-flex justify-content-around"
      >
        <span>Items</span>
        <span>{cart?.length}</span>
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        component="p"
        className="d-flex justify-content-around"
      >
        <span>Total</span>
        <span>{total}</span>
      </Typography>
      <Button onClick={cargarEnLaBase} variant="contained" color="secondary" className="bg-btn-checkout">
        Comprar
      </Button>
    </Container>
  );
}

export default BuysData;
