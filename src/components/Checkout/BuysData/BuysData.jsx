import React from "react";
import "./BuysData.css";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { UseCart } from "../../../provider/CarritoContexto";
import { getFirestore } from "../../../firebase/firebase";
import firebase from "firebase";
import "firebase/firestore";



import Pdf from "react-to-pdf";
import { useUserAdministrator } from "../../../provider/UserAdministrator";

const options = {
  orientation: 'landscape',
  
};

function BuysData(props) {
  const { cart, CalculatePrice } = UseCart();

  const [total, setTotal] = React.useState(0);

  const { user } = useUserAdministrator();


  const obtenerTotal = () => {
    setTotal(CalculatePrice());
  };
  React.useEffect(() => {
    obtenerTotal();
  }, [cart]);


  const cargarEnLaBase = async () => {
    const newORder = {
      buyer: user.email,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };
  
    try {
      const db = getFirestore();
      await db.collection("orders").doc().set(newORder);
      alert("todo perfecto");
    } catch (error) {
      console.log(error);
    }
  };

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
      { user ?(<>
        <Button
        onClick={cargarEnLaBase}
        variant="contained"
        color="secondary"
        className="bg-btn-checkout"
      >
        Comprar
      </Button>
      <Pdf targetRef={props.referencia} filename="code-example.pdf" options={options} scale={0.6}>
        {({ toPdf }) => <Button onClick={toPdf}>Descargar Ticket</Button>}
      </Pdf>
      </>):(<p> Debes logearte para poder comprar </p>)}
      
    </Container>
  );
}

export default BuysData;
