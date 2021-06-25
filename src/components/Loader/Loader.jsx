import React from 'react'

function Loader(props) {
    return (
        <div>
            {props.load ? <h3>Cargado</h3>: <h3>Cargando</h3>}
            {console.log(props.load)}
        </div>
    )
}

export default Loader
