import React, {useContext, useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import {AccountContext} from "../auth/Account";

// TODO: add log_out Component
function Header() {
    const [{cart},dispatch]=useStateValue();
    const [status,setStatus]=useState(false);
    const [nickName,setNickName]=useState();

    const {getSession,logout} = useContext(AccountContext);


    useEffect(()=>{
        getSession()
            .then(session=>{
                // TODO: after debug delete this line.
                console.log("Session: ",session);
                setStatus(true)
                setNickName(session.idToken.payload.nickname)

            })
    },[])
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header_logo'
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header_search">
                <input
                    type="text"
                    className="header_searchInput"
                />
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">

                 <div className="header_option">
                 <span className="header_optionLineOne">
                     Hello {nickName?nickName:"Guest"}
                 </span>
                     <span className="header_optionLineTwo">
                     {status?
                         (<a className="header_logout" href="/"  onClick={logout} >Log Out</a>):
                         (<Link to="/login"><p className="header_signIn">Sign In</p></Link>)}
                 </span>
                 </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                         Returns
                     </span>
                    <span className="header_optionLineTwo">
                         & Orders
                     </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                         Your
                     </span>
                    <span className="header_optionLineTwo">
                         Prime
                     </span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwo header_basketCount">{cart?cart.length:0}</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;