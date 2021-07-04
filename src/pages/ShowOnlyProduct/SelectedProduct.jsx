import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BannerTituloRestaurant from "../../components/Banneres/Restaurant/BannerTituloRestaurant";
import { getFirestore } from "../../firebase/firebase";
import ASingleProduct from "../../components/CardProducts/ASingleProduct";

function SelectedProduct() {
  const { idResto, idProduc } = useParams();
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BannerTituloRestaurant name={idResto} />
      {console.log(idResto, idProduc)}
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
                  img={prod.image}
                  description={prod.description}
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
