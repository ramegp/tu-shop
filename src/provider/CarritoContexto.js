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
        }else{
            for(var i = cart.length - 1; i >= 0; i--) {
                if(cart[i].id === obj.id){
                    cart[i].amount = cart[i].amount + obj.amount;
                    setCart([...cart])
                }
            }
        }
        
    }

    function IsIn(obj) {
        let isIn = false;
        for(var i = cart.length - 1; i >= 0; i--) {
            isIn = (cart[i].id === obj.id)
        }
        return isIn
    }

    function removeItemFromArr ( obj ) {
        
        for(var i = cart.length - 1; i >= 0; i--) {
            if(cart[i].id === obj.id) {
               cart.splice(i, 1);
            }
        }
    
        setCart([...cart])
    }
    
    function UpDateAmountAdd(obj) {
        for(var i = cart.length - 1; i >= 0; i--) {
            if(cart[i].id === obj.id){
                cart[i].amount ++;
                setCart([...cart])
            }
        }
    }

    function UpDateAmountSubtract(obj) {
        for(var i = cart.length - 1; i >= 0; i--) {
            if(cart[i].id === obj.id){
                cart[i].amount --;
                setCart([...cart])
            }
        }
        
    }
    
    function CalculatePrice() {
        let total = 0;
        for(var i = cart.length - 1; i >= 0; i--) {
            total = total + cart[i].amount*cart[i].price
        }
        return total
    }

    return (
        <CartContexto.Provider value={{cart,AddToCart, removeItemFromArr, UpDateAmountAdd, UpDateAmountSubtract, CalculatePrice}}>
            {children}
        </CartContexto.Provider>
    )
}
