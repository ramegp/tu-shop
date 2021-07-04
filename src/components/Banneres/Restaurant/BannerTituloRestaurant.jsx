import React from 'react';
import './BannerTituloRestaurant.css'

function BannerTituloRestaurant(props) {
    return (
        <div className="container-banner-titulo-restaurant">
            {props.name}
        </div>
    )
}

export default BannerTituloRestaurant
