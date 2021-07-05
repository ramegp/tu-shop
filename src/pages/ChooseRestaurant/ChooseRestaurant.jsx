import React, { useState, useEffect } from "react";
import "./ChooseRestaurant.css";
import BannerChoose from "../../components/Banneres/ChooseRestaurant/BannerChoose";

import { getFirestore } from "../../firebase/firebase";


function ChooseRestaurant() {
  const [restaurants, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

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
        
      {/* <BannerChoose name="Gocha" />
      <BannerChoose name="Otilia" />
      <BannerChoose name="Ver   Todos" />
      <BannerChoose name="Dean&Dennis" />
      <BannerChoose name="Deniro" /> */}
    </div>
  );
}

export default ChooseRestaurant;
