import React from "react";
import { Container } from "@material-ui/core";
import "./Home.css";
import TituloDesktop from "../../components/Titulo/TituloDesktop";
import ButtonHome from "../../components/Buttons/ButtonsHome/ButtonHome";

function Home() {
  return (
    <Container maxWidth="xl" className="d-flex container-home">
      <TituloDesktop title="Your Shop" />
      <ButtonHome />
    </Container>
  );
}

export default Home;
