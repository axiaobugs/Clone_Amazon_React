import React from 'react';
import './product.css'
import {useStateValue} from "../../StateProvider";

function Product({id,title,image,price,rating}) {
    const [{cart},dispatch] = useStateValue();

    const addToCartHandler=()=>{
        /* *  dispatch the item into the data layer*/
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }



    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <p>{rating}</p>
                </div>
            </div>

            <img src={image} alt=""/>
            <button onClick={addToCartHandler}>Add to Cart</button>

        </div>
    );
}

export default Product;