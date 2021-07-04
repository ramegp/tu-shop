import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CardProduct from "../CardProducts/CardProducts";

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ShowProducts() {
  const [productos, setData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Grid container className="d-flex flex-wrap justify-content-center">
        {productos !== null ? (
          productos.map((prod, index) => {
            return (
              <>
              <CardProduct
                    name={prod.title}
                    category={prod.category}
                    price={prod.price}
                    id={index}
                    img={prod.image}
                    description={prod.description}
                  />
                
              </>
            );
          })
        ) : (
          <div className={classes.root}>
            <LinearProgress />
          </div>
        )}
      </Grid>
    </div>
  );
}

export default ShowProducts;
