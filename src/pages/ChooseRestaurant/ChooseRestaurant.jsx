import React, { useState, useEffect } from "react";
import "./ChooseRestaurant.css";
import BannerChoose from "../../components/Banneres/ChooseRestaurant/BannerChoose";

import carne from "../../assets/img/Restaurant/carne.jpg";
import otilia from "../../assets/img/Restaurant/Otilia.jpg";
import deniro from "../../assets/img/Restaurant/deniro.png";
import gocha from "../../assets/img/Restaurant/gocha.jpg";

import fondo01 from "../../assets/img/fondoRestaurant/fondo-001.jpg";
import fondo02 from "../../assets/img/fondoRestaurant/fondo-002.jpg";
import fondo03 from "../../assets/img/fondoRestaurant/fondo-003.jpg";
import fondo04 from "../../assets/img/fondoRestaurant/fondo-004.jpg";
import fondo05 from "../../assets/img/fondoRestaurant/fondo-005.jpg";
import { getFirestore } from "../../firebase/firebase";
import { Restore } from "@material-ui/icons";

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
