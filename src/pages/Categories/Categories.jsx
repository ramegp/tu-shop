import React from 'react';
import ShowCategory from '../../components/Category/ShowCategory';
import { useParams } from 'react-router-dom';
import TituloDesktop from '../../components/Titulo/TituloDesktop';

function Categories() {
    const { category } = useParams();
    return (
        <div className="mt-5">
            <TituloDesktop title={category}/>
            <ShowCategory />
        </div>
    )
}

export default Categories
