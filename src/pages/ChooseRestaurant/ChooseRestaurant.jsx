import React, { useState, useEffect } from "react";
import "./ChooseRestaurant.css";
import BannerChoose from "../../components/Banneres/ChooseRestaurant/BannerChoose";

import { getFirestore } from "../../firebase/firebase";


function ChooseRestaurant() {
  const [restaurants, setItems] = useState([]);

  useEffect(() => {
    
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
      });
  }, []);
  return (
    <div className="container-choose-restaurant">
      {restaurants !== null ? (
        restaurants.map((prod, index) => {
          return (
            <>
              <BannerChoose name={prod.name} key={prod.name}/>
              
            </>
          );
        })
      ) : (
        <div>cargando</div>
      )}
       
    </div>
  );
}

export default ChooseRestaurant;
