import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import { getFirestore } from "../../../../../firebase/firebase";
import ShowProductsAdmin from "../Modificar/ShowProductsAdmin";


import ModificarDatos from "../Modificar/ModificarDatos";

function ShowDatosAdmin() {
  const [restaurants, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [selecResto, setSelectResto] = useState("");

  //variables del producto editado
  const [editarPrendido, setEditarPrendido] = useState(false);
  const [productoID, setproductoID] = useState("");
  const [productoTitle, setproductoTitle] = useState("");
  const [productoCat, setproductoCat] = useState("");
  const [productoDesc, setproductoDesc] = useState("");
  const [productoPrice, setproductoPrice] = useState(0);

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

  const buildProductoEdit = (id, obj) => {
    setproductoID(id);
    setproductoTitle(obj.title);
    setproductoCat(obj.category);
    setproductoDesc(obj.description);
    setproductoPrice(obj.price);
  };

  const bringProductosBD = (resto) => {
    const db = getFirestore();
    const itemCollection = db.collection(`r-${resto}`);
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
  };

  const handleSelect = (e) => {
    setSelectResto(e.target.value.toLowerCase());
    bringProductosBD(e.target.value.toLowerCase());
    setEditarPrendido(false);
  };

  const handleDelete = (coleccionDelProducto, id) => {
    const db = getFirestore();
    db.collection(`r-${coleccionDelProducto}`)
      .doc(id)
      .delete()
      .then(() => {
        //console.log("Document successfully deleted!");
        //console.log(`Se borro de ${coleccionDelProducto} id: ${id}`);
        bringProductosBD(coleccionDelProducto);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const handleEdit = (coleccionDelProducto, id, obj) => {
    //alert(`${id} ${coleccionDelProducto}`);
    buildProductoEdit(id, obj);
    //console.log(`producto a editar Nombre ${productoTitle} precio ${productoPrice}`);
    setEditarPrendido(true);
  };

  const handleSaveProductEdit = () => {
    setEditarPrendido(false);

    let obj = {
      title:productoTitle,
      id:productoID,
      description: productoDesc,
      category:productoCat,
      price: productoPrice
    }

    const db = getFirestore();
    let modifyProduc = db.collection(`r-${selecResto}`).doc(productoID);

    // Set the "capital" field of the city 'DC'
    return modifyProduc
      .update(obj)
      .then(() => {
        console.log("Document successfully updated!");
        bringProductosBD(selecResto)
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

      
  };

  return (
    <div>
      <Select
        native
        defaultValue=""
        style={{ margin: 8, width: "50%" }}
        onChange={handleSelect}
      >
        <option>placeholder</option>
        {restaurants !== null
          ? restaurants.map((r, i) => {
              return <option>{r.name}</option>;
            })
          : null}
      </Select>
      {editarPrendido && (
        <>
          <div>
            <ModificarDatos
            key={"modificarProductos"}
              producto={{
                id: productoID,
                title: productoTitle,
                category: productoCat,
                description: productoDesc,
                price: productoPrice,
              }}
              modificar={buildProductoEdit}
              guardar={handleSaveProductEdit}
              resto={selecResto}
              seters={{
                title: setproductoTitle,
                price: setproductoPrice,
                category: setproductoCat,
                description: setproductoDesc
              }}
            />
          </div>
        </>
      )}
      <div>
        {products !== null ? (
          <ShowProductsAdmin
            key={"mostrarProductos"}
            arreglo={products}
            perteneceA={selecResto}
            delete={handleDelete}
            edit={handleEdit}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ShowDatosAdmin;
