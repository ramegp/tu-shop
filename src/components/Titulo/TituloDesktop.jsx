import React from 'react';
import './TituloDesktop.css'

function TituloDesktop(props) {
    return (
        <div className="title-home">
            {props.title}
        </div>
    )
}

export default TituloDesktop
