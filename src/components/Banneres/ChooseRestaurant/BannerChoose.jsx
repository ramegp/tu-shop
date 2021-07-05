import React, { } from "react";
import "./BannerChoose.css";
import { Link } from "react-router-dom";


function BannerChoose(props) {

  

  return (
      <>
    <Link to={`/choose-restaurant/r-${(props.name).toLowerCase()}`} className="banner-link">
      <div className="banner-container" >

        <div className="banner-name-restaurant">{props.name}</div>

      </div>
    </Link>
    </>
  );
}

export default BannerChoose;
