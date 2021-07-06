import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import ModificarDatos from './componentsAdmin/Modificar/ModificarDatos';
function ContenedorAdmin() {
    const [showAdd, setAdd] = useState(false);
    const [showModificar, setModificar] = useState(false);

    const handleBtnAdd = ()=>{
        setAdd(true);
        setModificar(false);
    }
    const handleBtnModificar = ()=>{
        setAdd(false);
        setModificar(true);
    }
    return (
        <div className="mt-5 pt-4">
            <h2>Ud posee los privilegios de usuario root</h2>
            <div>
                <h3>Panel de control</h3>
                <div className="d-flex justify-content-around">
                    <Button variant="contained" color="primary" onClick={handleBtnAdd}> Agregar Producto </Button>
                    <Button variant="contained" color="secondary" onClick={handleBtnModificar}> Modificar Producto </Button>
                </div>
                {showAdd ?(<p>add</p>):(null)}
                {showModificar ? (<ModificarDatos/>):null}
            </div>
        </div>
    )
}

export default ContenedorAdmin
