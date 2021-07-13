import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import ShowDatosAdmin from './componentsAdmin/Datos/ShowDatosAdmin';
import AddProductAdmin from './componentsAdmin/Add/AddProductAdmin';
function ContenedorAdmin() {
    const [showAdd, setAdd] = useState(false);
    const [showDatos, setDatos] = useState(false); 

    const handleBtnAdd = ()=>{
        setAdd(true);
        setDatos(false);
    }
    
    const handleBtnDatos = () =>{
        setAdd(false);
        setDatos(true);
    }
    return (
        <div className="mt-5 pt-4">
            <h2>Ud posee los privilegios de usuario root</h2>
            <div>
                <h3>Panel de control</h3>
                <div className="d-flex justify-content-around mb-4">
                    <Button variant="contained" color="primary" onClick={handleBtnAdd}> Agregar Producto </Button>
                    <Button variant="contained" color="secondary" onClick={handleBtnDatos}> Mostrar Datos </Button>
                </div>
                {showAdd ?(<AddProductAdmin key={"agregar-productos-base-de-datos"}/>):(null)}
                {showDatos ? (<ShowDatosAdmin key={"modificar-eliminar-productos"}/>):null}
            </div>
        </div>
    )
}

export default ContenedorAdmin
