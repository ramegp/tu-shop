import React from "react";
import { useParams } from "react-router-dom";
import "./About.css";
import Grid from "@material-ui/core/Grid";

//import ubication shop maps
import mapsDireccionTienda from "../../assets/img/mapsTienda.png";

function About() {
  const { name } = useParams();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6} className="">
          <img
            src={mapsDireccionTienda}
            alt="google maps tu shop"
            className="img-maps-ubication"
          />
        </Grid>
        <Grid direction="column" item xs={12} sm={6} md={6} lg={6} className="">
          <Grid item xs={12} sm={6} md={12} lg={6} className="">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptates a, ad esse blanditiis incidunt optio reprehenderit
              repellendus delectus omnis tempore inventore quod doloremque
              cumque at. Ipsa dolorem nihil sint.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} className="">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptates a, ad esse blanditiis incidunt optio reprehenderit
              repellendus delectus omnis tempore inventore quod doloremque
              cumque at. Ipsa dolorem nihil sint.
            </p>
          </Grid>
        </Grid>
      </Grid>
      {/* <TituloDesktop title={name} />
    <div className="d-flex justify-content-center align-items-center container-about">  
    </div> */}
    </>
  );
}

export default About;
