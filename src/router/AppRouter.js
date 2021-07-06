import React from 'react';
import { Route,} from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import CheckoutPage from '../pages/Checkout/Checkout'
import SignIn from '../pages/SignIn/SignIn';
import Categories from '../pages/Categories/Categories';
import Product from '../pages/Products/Product';
import ChooseRestaurant from '../pages/ChooseRestaurant/ChooseRestaurant';
import Restaurant from '../pages/Restaurants/Restaurant';
import SelectedProduct from '../pages/ShowOnlyProduct/SelectedProduct';
import CategoryRestaurant from '../pages/CategoryRestaurant/CategoryRestaurant';
import Administration from '../pages/Administration/Administration';
function AppRouter() {
    return (
        <div>
            {/* <Route path="/categories/:category" component={Categories} /> */}

            <Route exact path="/choose-restaurant/:idResto/cat/:idCat" component={CategoryRestaurant}/>
            <Route exact path="/choose-restaurant/:idResto/:idProduc" component={SelectedProduct}/>


            <Route exact path="/choose-restaurant/:idResto" component={Restaurant}/>
            <Route exact path="/choose-restaurant" component={ChooseRestaurant}/>
            <Route exact path="/admin" component={Administration} />
            <Route exact path="/" component={Home} />

            {/* <Route exact path="/shop" component={Shop} /> */}


            {/* <Route path="/product/:idProd" component={Product} /> */}
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
