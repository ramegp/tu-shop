import React from 'react';
import './Categories.css'
import ShowCategory from '../../components/Category/ShowCategory';
import { useParams } from 'react-router-dom';
import TituloDesktop from '../../components/Titulo/TituloDesktop';

function Categories() {
    const { category } = useParams();
    return (
        <div className="container-categories">
            <TituloDesktop title={category}/>
            <ShowCategory />
        </div>
    )
}

export default Categories
