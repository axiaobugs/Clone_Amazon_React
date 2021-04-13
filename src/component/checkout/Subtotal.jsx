import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css'
import {useStateValue} from "../../StateProvider";
import {getCartTotal} from '../../reducer'

function Subtotal() {
    // * Pull the data from the datalayer
    const [{cart},dispatch]=useStateValue();
    console.log(cart)
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({cart.length} Items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;