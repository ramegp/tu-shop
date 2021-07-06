import React, { useEffect, useState } from "react";
import { getFirestore } from "../../../../../firebase/firebase";
import Select from "@material-ui/core/Select";
import ShowProductsAdmin from "./ShowProductsAdmin";

function ModificarDatos() {
  const [restaurants, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([])

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
  
  const handleSelect = (e) => {
    console.log(e.target.value.toLowerCase())

    const db = getFirestore();
    const itemCollection = db.collection(`r-${e.target.value.toLowerCase()}`);
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
  }

  return (
    <div>
      odificar
    </div>
  );
}

export default ModificarDatos;