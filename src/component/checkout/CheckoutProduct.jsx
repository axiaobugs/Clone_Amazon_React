import React from 'react';
import './checkoutProduct.css'
import {useStateValue} from "../../StateProvider";

function CheckoutProduct({id,image,price,title}) {
    const [{cart},dispatch]=useStateValue();

    const removeFromCart=()=>{
        // ! remove the item from the cart
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,

        })
    }


    return (
        <div className="checkoutProduct" key={id}>
            <img className='checkoutProduct_image' src={image} alt=""/>
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;