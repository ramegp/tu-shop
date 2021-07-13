import React from 'react';
import './Restaurant.css';
import { useParams } from 'react-router-dom';
import BannerTituloRestaurant from '../../components/Banneres/Restaurant/BannerTituloRestaurant';
import ShowFood from '../../components/ShowFoodRestaurant/ShowFood';

function Restaurant() {
    const {idResto} = useParams()

    return (
        <div className="container-resto">
            <BannerTituloRestaurant name={idResto}/>
            <ShowFood name={idResto} key={idResto}/>
            
        </div>
    )
}

export default Restaurant
