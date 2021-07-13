import React from "react";
import "./ShowProductsAdmin.css";

import Button from "@material-ui/core/Button";

function MostarDatosProducto (props) {

  return(<>
    <div className="d-flex flex-column width-datos-prod m-3">
      <div><span className="text-muted">Titulo</span> {props.producto.title}</div>
      <div><span className="text-muted">Categoria</span> {props.producto.category}</div>
      <div><span className="text-muted">Descripcion</span> {props.producto.description}</div>
      <div><span className="text-muted">Precio</span> {props.producto.price}</div>
      <Button variant="contained" color="secondary" onClick={()=>{props.delete(props.perteneceA,props.producto.id)}}>Eliminar</Button>
      <Button variant="contained" color="danger" onClick={()=>{props.edit(props.perteneceA,props.producto.id,{title:props.producto.title,category:props.producto.category,description:props.producto.description,price:props.producto.price})}}>Editar</Button>
    </div>
  </>);
}

function ShowProductsAdmin(props) {
  

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap mt-5">
      {props.arreglo.map((p, i) => {
            return (<>
              <MostarDatosProducto producto={p} delete={props.delete} edit={props.edit} perteneceA={props.perteneceA}/>
            </>)})}

      {/* <table className="tabla-datos">
        <thead>
          <tr >
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Description</th>
            <th className="p-3">Price</th>
            <th className="p-3">Eliminar</th>
            <th className="p-3">Modificar</th>
          </tr>
        </thead>
        <tbody>
          {props.arreglo.map((p, i) => {
            return (
              <tr>
                <td className="p-2">{p.title}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">{p.description}</td>
                <td className="p-2">{p.price}</td>
                <td className="p-2"><Button variant="contained" color="secondary" onClick={()=>{props.delete(props.perteneceA,p.id)}}>Eliminar</Button></td>
                <td className="p-2"><Button variant="contained" color="danger" onClick={()=>{props.edit(props.perteneceA,p.id,{title:p.title,category:p.category,description:p.description,price:p.price})}}>Editar</Button></td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default ShowProductsAdmin;
