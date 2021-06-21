import React from "react";
import './LinksCategory.css';
import {Link} from 'react-router-dom';

function LinksCategory() {
  const [categorias, setCategorias] = React.useState(null);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((cat) => cat.json())
      .then((cat) => {
        setCategorias(cat);
      });
    console.log(categorias);
  }, []);
  return (
    <div>
      <ul className="ul-category">
        {categorias !== null ? (
          categorias.map((cat) => {
            return <li className="ul-li-category"><Link className="ul-li-link-category" to={`/categories/${cat}`}>{cat}</Link></li>;
          })
        ) : (
          <p>cateog</p>
        )}
      </ul>
    </div>
  );
}

export default LinksCategory;
