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
import { UserAdministrator } from './provider/UserAdministrator'


function App() {




  return (
    <div className="App">

      <UserAdministrator>
        <CarritoContexto>


          <Router>

            <MenuDesktop />
            <MenuMobile />
            <Switch>
              <AppRouter />
            </Switch>
          </Router>

        </CarritoContexto>
      </UserAdministrator>
    </div>
  );
}

export default App;
