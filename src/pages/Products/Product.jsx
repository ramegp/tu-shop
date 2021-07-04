import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ASingleProduct from "../../components/CardProducts/ASingleProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

}));

function Product() {
  const [producto, setData] = useState([]);
  const { idProd } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idProd}`)
      .then((prod) => prod.json())
      .then((prod) => {
        setData(prod);
      });
  }, []);

  return (
    <div className="">
      <Grid container className="d-flex justify-content-center alignItems-center">
        
        {producto !== null ? (
          <>
            <ASingleProduct
              name={producto.title}
              category={producto.category}
              price={producto.price}
              id={producto.id}
              img={producto.image}
              description={producto.description}
            />
            
          </>
        ) : (
          <h3>Cargando</h3>
        )}
      </Grid>
    </div>
  );
}

export default Product;
