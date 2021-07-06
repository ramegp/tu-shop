import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import { getFirestore } from "../../../../../firebase/firebase";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function AddProductAdmin() {
  const classes = useStyles();
  const [var_Title, setVar_Title] = useState("");
  const [var_Category, setVar_Category] = useState("");
  const [var_Description, setVar_Description] = useState("");
  const [var_Price, setVar_Price] = useState(0);
  const [var_Resto, setVar_Resto] = useState("");

  const handleTitle = (e) => {
    setVar_Title(e.target.value);
  };
  const handleCategory = (e) => {
    setVar_Category(e.target.value);
  };
  const handleDescription = (e) => {
    setVar_Description(e.target.value);
  };
  const handlePrice = (e) => {
    setVar_Price(parseInt(e.target.value));
  };
  const handleResto = (e) => {
    setVar_Resto(`r-${(e.target.value).toLowerCase()}`);
  };

  const handleCargar = async () => {
    console.log(`nombre ${var_Title}`);
    console.log(`nombre ${var_Category}`);
    console.log(`nombre ${var_Description}`);
    console.log(`precio ${var_Price}`);
    console.log(`Cargado en ${var_Resto}`);

    let obj={
        title: var_Title,
        category: var_Category,
        description: var_Description,
        price: var_Price
    }
    
    try {
        const db = getFirestore();
        await db.collection(`${var_Resto}`).doc().set(obj);
        alert("todo perfecto");
      } catch (error) {
        console.log(error);
      }
  };

  const [restaurants, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("restaurants");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no hay resultados");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div>
          <TextField
            id="title"
            label="Nombre Producto"
            style={{ margin: 8 }}
            placeholder="Nombre"
            
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={handleTitle}
          />
          <TextField
            id="category"
            label="Categoria producto"
            style={{ margin: 8 }}
            placeholder="Categoria"
            
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={handleCategory}
          />
          <TextField
            id="description"
            label="Descripcion producto"
            style={{ margin: 8 }}
            placeholder="Descripcion"
            
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={handleDescription}
          />
          <FilledInput
            id="price"
            fullWidth
            style={{ margin: 8 }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={handlePrice}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
      <TextField
        id="restaurant"
        select
        label="Restaurante"
        /* value={currency} */
        onChange={handleResto}
        SelectProps={{
          native: true,
        }}
        style={{ margin: 8 }}
        helperText="Seleccione el restaurante donde cargar el producto"
        variant="filled"
      >
        {restaurants.map((option) => (
          <option key={option.value} value={option.name}>
            {option.name}
          </option>
        ))}
      </TextField>
      <Button variant="contained" color="secondary" onClick={handleCargar}>
        {" "}
        Cargar Producto{" "}
      </Button>
      </div>
    </>
  );
}

export default AddProductAdmin;
