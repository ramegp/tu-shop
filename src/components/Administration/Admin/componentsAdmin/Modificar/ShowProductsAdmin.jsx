import React from "react";
import "./ShowProductsAdmin.css";

function ShowProductsAdmin(props) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <table className="flex-wrap">
        <thead>
          <tr >
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Description</th>
            <th className="p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.arreglo.map((p, i) => {
            return (
              <tr onClick={(e)=>{console.log(e.target)}}>
                <td className="p-2">{p.title}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">{p.description}</td>
                <td className="p-2">{p.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProductsAdmin;
