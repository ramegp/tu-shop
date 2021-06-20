import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesktop from "./components/Menu/Desktop/MenuDesktop";
import MenuMobile from "./components/Menu/Mobile/MenuMobile";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="App">
      <Router>
        <MenuDesktop />
        <MenuMobile />
        <Switch>
          <AppRouter/>
          {/* <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/checkout-page" component={CheckoutPage}/> */}
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
