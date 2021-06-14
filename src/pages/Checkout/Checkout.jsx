import React from 'react';
import './Checkout.css';
import CheckoutTicket from '../../components/Checkout/CheckoutDesktop/CheckoutDesktop';

function Checkout() {
    return (
        <div className="page-checkout"> 
            <CheckoutTicket />
            <div className="page-checkout-footer">
                Footer
            </div>
        </div>
    )
}

export default Checkout
