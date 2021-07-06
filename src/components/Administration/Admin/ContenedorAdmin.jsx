import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import ModificarDatos from './componentsAdmin/Modificar/ModificarDatos';
import ShowDatosAdmin from './componentsAdmin/Datos/ShowDatosAdmin';
import AddProductAdmin from './componentsAdmin/Add/AddProductAdmin';
function ContenedorAdmin() {
    const [showAdd, setAdd] = useState(false);
    const [showModificar, setModificar] = useState(false);
    const [showDatos, setDatos] = useState(false); 

    const handleBtnAdd = ()=>{
        setAdd(true);
        setModificar(false);
        setDatos(false);
    }
    const handleBtnModificar = ()=>{
        setAdd(false);
        setModificar(true);
        setDatos(false);
    }
    const handleBtnDatos = () =>{
        setAdd(false);
        setModificar(false);
        setDatos(true);
    }
    return (
        <div className="mt-5 pt-4">
            <h2>Ud posee los privilegios de usuario root</h2>
            <div>
                <h3>Panel de control</h3>
                <div className="d-flex justify-content-around mb-4">
                    <Button variant="contained" color="primary" onClick={handleBtnAdd}> Agregar Producto </Button>
                    <Button variant="contained" color="secondary" onClick={handleBtnModificar}> Modificar Producto </Button>
                    <Button variant="contained" color="secondary" onClick={handleBtnDatos}> Mostrar Datos </Button>
                </div>
                {showAdd ?(<AddProductAdmin />):(null)}
                {showModificar ? (<ModificarDatos/>):null}
                {showDatos ? (<ShowDatosAdmin/>):null}
            </div>
        </div>
    )
}

export default ContenedorAdmin
