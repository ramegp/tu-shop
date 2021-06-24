import React, {createContext,useContext,useState} from 'react';

const CartContexto = createContext()


export function UseCart() {
    return useContext(CartContexto)
}


export function CarritoContexto({children}) {

    const [cart, setCart] = useState([]);

    function AddToCart(obj) {
        if(!IsIn(obj)){
            setCart([...cart,obj])
        }
        
    }

    function IsIn(obj) {
        let isIn = false;
        for(var i = cart.length - 1; i >= 0; i--) {
            isIn = (cart[i].id === obj.id)

            /* if(cart[i].id === obj.id) {
               isIn
            } */
        }
        return isIn
    }

    function removeItemFromArr ( obj ) {
        /* console.log(arr) */
        for(var i = cart.length - 1; i >= 0; i--) {
            if(cart[i].id === obj.id) {
               cart.splice(i, 1);
            }
        }
    
        setCart([...cart])
    }
    

    return (
        <CartContexto.Provider value={{cart,AddToCart, removeItemFromArr}}>
            {children}
        </CartContexto.Provider>
    )
}
