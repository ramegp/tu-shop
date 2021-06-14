import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesktop from "./components/Menu/Desktop/MenuDesktop";
import MenuMobile from "./components/Menu/Mobile/MenuMobile";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

import { Hidden } from '@material-ui/core';
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuDesktop />
        <MenuMobile />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/about" component={About}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
