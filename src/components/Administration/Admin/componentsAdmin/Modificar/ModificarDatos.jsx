import React, { useEffect, useState } from "react";
import { getFirestore } from "../../../../../firebase/firebase";

import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";

function ModificarDatos(props) {
  


  const handleOnChangeTitle = (e) =>{
    props.seters.title(e.target.value)
  }
  const handleOnChangeCategory = (e)=>{
    props.seters.category(e.target.value)
  }
  const handleOnChangeDescription =(e)=>{
    props.seters.description(e.target.value);
  }
  const handleOnChangePrice =(e)=>{
    props.seters.price(e.target.value);
  }
  return (
    <>
      <div>
        
        <TextField
          id="titleproducto"
          label="Nombre Producto"
          style={{ margin: 8 }}
          placeholder="Nombre"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={props.producto.title}
          onChange={handleOnChangeTitle}
        />
        <TextField
          id="category"
          label="Categoria producto"
          style={{ margin: 8 }}
          placeholder="Categoria"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={props.producto.category}
          onChange={handleOnChangeCategory}
        />
        <TextField
          id="description"
          label="Descripcion producto"
          style={{ margin: 8 }}
          placeholder="Descripcion"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={props.producto.description}
          onChange={handleOnChangeDescription}
        />
        <FilledInput
          id="price"
          style={{ margin: 8 }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          value={props.producto.price}
          onChange={handleOnChangePrice}
        />
      </div>
      <Button variant="contained" color="secondary" onClick={props.guardar}>
        Guardar
      </Button>
    </>
  );
}

export default ModificarDatos;
