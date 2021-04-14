import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../StateProvider";

function Header() {
    const [{cart},dispatch]=useStateValue();
    const userInfo=JSON.parse(localStorage.getItem("userInfo"))
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
                 <Link to='/login'>
                     <div className="header_option">
                     <span className="header_optionLineOne">
                         Hello {userInfo&&userInfo.code===200?userInfo.user.nickName:"Guest"}
                     </span>
                         <span className="header_optionLineTwo">
                         {userInfo&&userInfo.code===200?"Log out":"Sign In"}
                     </span>
                     </div>
                 </Link>
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