import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import CheckoutPage from '../pages/Checkout/Checkout'

function AppRouter() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about/:name" component={About} />
            <Route path="/checkout-page" component={CheckoutPage} />
            <Route path="*">Not Found Page</Route>
        </div>
    )
}

export default AppRouter
