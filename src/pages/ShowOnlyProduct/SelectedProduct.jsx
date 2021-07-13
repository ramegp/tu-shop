import React, { useState, useEffect } from "react";
import './SelectedProduct.css';
import { useParams } from "react-router-dom";
import BannerTituloRestaurant from "../../components/Banneres/Restaurant/BannerTituloRestaurant";
import { getFirestore } from "../../firebase/firebase";
import ASingleProduct from "../../components/CardProducts/ASingleProduct";

function SelectedProduct() {
  const { idResto, idProduc } = useParams();
  const [item, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db
      .collection(`${idResto}`)
      .where("id", "==", `${idProduc}`);
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
    <div className="container-selectec-product">
      <BannerTituloRestaurant name={idResto} key={`baner-${idResto}`}/>
      
      <div className="d-flex justify-content-center alignItems-center">
        {item !== null ? (
          item.map((prod, index) => {
            return (
              <>
                <ASingleProduct
                  
                  name={prod.title}
                  category={prod.category}
                  price={prod.price}
                  id={prod.id}
                  img={prod.img}
                  description={prod.description}
                  key={"producto-seleccionado"}
                />
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

export default SelectedProduct;
