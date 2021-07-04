import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

function ShowCategory() {
  const [productCategory, setData] = useState(null);
  const { category } = useParams();
  const classes = useStyles();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Grid container className="d-flex flex-wrap justify-content-center">
        {productCategory !== null ? (
          productCategory.map((prod, index) => {
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

export default ShowCategory;
