import React from "react";
import { Container } from "@material-ui/core";
import "./Home.css";
import TituloDesktop from "../../components/Titulo/TituloDesktop";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ButtonHome from '../../components/Buttons/ButtonsHome/ButtonHome';

function Home() {
  return (
    <Container maxWidth="xl" className="d-flex container-home">
      <TituloDesktop title="Your Shop" />
        <ButtonHome />
      {/* <Link to="/shop" className="remove-txt-decoration size-btn-home">
        <Button to="/shop" variant="contained" color="primary" disableElevation className="size-btn-home">
          Visit Store
        </Button>
      </Link> */}
    </Container>
  );
}

export default Home;
