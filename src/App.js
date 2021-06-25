import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesktop from "./components/Menu/Desktop/MenuDesktop";
import MenuMobile from "./components/Menu/Mobile/MenuMobile";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AppRouter from "./router/AppRouter";

import { CarritoContexto } from './provider/CarritoContexto'

//import Loader from './components/Loader/Loader'

function App() {

  /* const [load, setLoad ] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(()=>{setLoad(true)},3000)
   
  },[])
 */


  return (
    <div className="App">

      {/* <Loader load={load} /> */}
      <CarritoContexto>


        <Router>

          <MenuDesktop />
          <MenuMobile />
          <Switch>
            <AppRouter />
          </Switch>
        </Router>

      </CarritoContexto>
    </div>
  );
}

export default App;
