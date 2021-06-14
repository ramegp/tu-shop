import React,{ useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import CardProduct from '../CardProducts/CardProducts';


function ShowProducts() {
  const [productos, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);


  return (
    <div>
      <Grid container >
      {productos !== null ? (productos.map((prod, index) => {
        return (
          <>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardProduct 
                name={prod.title}
                description={prod.description}
                price={prod.price}
                id={index}
                img={prod.image}
                description={prod.description}
              />
            </Grid>
          </>
        );
      })) :(<h2>Cargando datos</h2>)}

      </Grid>
    </div>
  );
}

export default ShowProducts;
