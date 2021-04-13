import React from 'react';
import './checkout.css'
import Subtotal from "./Subtotal";
import {useStateValue} from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{cart},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping cart
                    </h2>

                    {cart.map(item=>(
                        <CheckoutProduct id={item.id} image={item.image} price={item.price} title={item.title}/>
                    ))}



                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;