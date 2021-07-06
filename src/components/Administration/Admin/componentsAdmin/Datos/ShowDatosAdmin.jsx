import React, { useEffect, useState } from 'react';
import Select from "@material-ui/core/Select";
import { getFirestore } from '../../../../../firebase/firebase';
import ShowProductsAdmin from '../Modificar/ShowProductsAdmin';

function ShowDatosAdmin() {
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
            <Select
        native
        defaultValue="" 
        onChange={handleSelect}
      >
          <option>placeholder</option>
          {restaurants !== null ?(restaurants.map((r,i)=>{return(
              <option >{r.name}</option>
          )})):(null)}
        
      </Select>
      <div>
          
          {products !== null ? (<ShowProductsAdmin arreglo={products}/>):(null)}
      </div>
        </div>
    )
}

export default ShowDatosAdmin
