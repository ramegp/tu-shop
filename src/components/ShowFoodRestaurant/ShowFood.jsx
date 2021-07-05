import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase";
import "./ShowFood.css";

import CardProduct from "../CardProducts/CardProducts";
import CategoriesProducts from "../Banneres/CategoriesProducts/CategoriesProducts";


function isInCategory(arr, catSearch) {
  for (const cat of arr) {
    if (cat === catSearch) {
      return true;
    }
  }
  return false;
}

function takeCategories(arr) {
  let aux_arr = [];
  for (const prod of arr) {
    if (!isInCategory(aux_arr, prod.category)) {
      aux_arr.push(prod.category);
    }
  }
  return aux_arr;
}

function ShowFood(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection(`${props.name}`);
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no hay resultados");
        }
        setProducts(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div >
      <div className="d-flex flex-wrap justify-content-center">{takeCategories(products).map((cat,index)=>{
        return(
          <>
            <CategoriesProducts name={cat} resto={props.name} />
          </>
        )
      })}</div>
      <div className="d-flex flex-wrap justify-content-center">
      {products !== null ? (
        products.map((prod, index) => {
          return (
            <>
              <CardProduct
                name={prod.title}
                category={prod.category}
                price={prod.price}
                id={prod.id}
                img={`/public/assets/img/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg`}
                description={prod.description}
                resto={props.name}
                
              />
              {console.log(prod.id)}
            </>
          );
        })
      ) : (
        <div>cargando</div>
      )}
      </div>
    </div>
  );
}

export default ShowFood;
