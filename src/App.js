import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesktop from "./components/Menu/Desktop/MenuDesktop";
import MenuMobile from "./components/Menu/Mobile/MenuMobile";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AppRouter from "./router/AppRouter";

import {CarritoContexto} from './provider/CarritoContexto'

function App() {
  return (
    <div className="App">
      <CarritoContexto>

      
      <Router>
        <MenuDesktop />
        <MenuMobile />
        <Switch>
          <AppRouter/>
        </Switch>
      </Router>
      </CarritoContexto>
    </div>
  );
}

export default App;
