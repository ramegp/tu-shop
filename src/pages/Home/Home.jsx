import React from "react";
import { Container } from "@material-ui/core";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="xl" className="d-flex container-home">
      
      <div className="contenedor-titulo-home">
        <div className="titulo-home-r1">El Rincon</div>
        <div className="titulo-home-r2">De La</div>
        <div className="titulo-home-r3">Hamburgesa</div>
      </div>
      
      <Link to="/choose-restaurant" className="contenedor-btn">
        <div className="btn-home-tienda">Tienda</div>
      </Link>
    </Container>
  );
}

export default Home;
