import React from 'react';
import { Route,} from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import CheckoutPage from '../pages/Checkout/Checkout'
import SignIn from '../pages/SignIn/SignIn';
import Categories from '../pages/Categories/Categories';
import Product from '../pages/Products/Product';

function AppRouter() {
    return (
        <div>
            <Route path="/categories/:category" component={Categories} />
            <Route path="/product/:idProd" component={Product} />
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/about" component={About} />
            <Route path="/checkout-page" component={CheckoutPage} />
            <Route path="/signin" component={SignIn} />

            {/* 
            <Route path="/about/:name" component={About} />
             */}
            {/* <Route path="*" component={NotFoundPage}/> */}
            
        </div>
    )
}

export default AppRouter
