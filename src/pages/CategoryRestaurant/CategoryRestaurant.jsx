import React, { useEffect, useState } from "react";
import "./CategoryRestaurant.css";

import { useParams } from "react-router-dom";
import BannerTituloRestaurant from "../../components/Banneres/Restaurant/BannerTituloRestaurant";

import CardProduct from "../../components/CardProducts/CardProducts";
import { getFirestore } from "../../firebase/firebase";

function CategoryRestaurant() {
  const { idResto, idCat } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db
      .collection(`${idResto}`)
      .where("category", "==", `${idCat}`);
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
      });
  }, []);

  return (
    <div className="container-cat-restaurant">
      <BannerTituloRestaurant name={idResto +" "+ idCat} />
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {products !== null
          ? products.map((prod, index) => {
              return (
                <CardProduct
                  name={prod.title}
                  category={prod.category}
                  price={prod.price}
                  id={prod.id}
                  img={prod.img}
                  description={prod.description}
                  resto={idResto}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default CategoryRestaurant;
