import React from "react";
import "./Shop.css";
import ShowProducts from "../../components/ShowProducts/ShowProducts";
import TituloDesktop from "../../components/Titulo/TituloDesktop";
import LinksCategory from "../../components/Category/LinksCategory/LinksCategory";

function Shop() {
  

  return (
    <div className="container-shop ">
      <div className="shop-title">
        <TituloDesktop title="Productos" />
      </div>
      <LinksCategory />
      <ShowProducts />
    </div>
  );
}

export default Shop;
