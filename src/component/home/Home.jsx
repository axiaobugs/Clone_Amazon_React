import React from 'react';

import './home.css'
import Product from "../product/Product";

// TODO: id will use the database of product_id

function Home(props) {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2021/TV/BRND/BRND_MTH21_00000_GWBleedingHero_1500x600_Final_en-AU_FT_PVD6658._CB657148049_.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product
                        id='12341'
                        title="Super Mario 3D World + Bowser's Fury - Nintendo Switch"
                        price={58.88}
                        image="https://m.media-amazon.com/images/I/81TK5d+I+yL._AC_UY218_.jpg"/>
                    <Product
                        id="3234234"
                        title="Playstation DualSense Wireless Controller"
                        price={69.98}
                        image="https://m.media-amazon.com/images/I/61o7ai+YDoL._AC_UY218_.jpg"/>
                </div>
                <div className="home_row">
                    <Product
                        id='3453'
                        title="Redragon S101 有线游戏键盘和鼠标组合 RGB 背光游戏键盘,带多媒体键腕托和红色背光游戏鼠标 3200 DPI 适用于 Windows PC 游戏机(黑色)"
                        price={39.99}
                        image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg"/>
                    <Product
                        id='12'
                        title="Turtle Beach Stealth 700 Gen 2 Premium Wireless Gaming Headset for Xbox One and Xbox Series X|S"
                        price={149.95}
                        image="https://m.media-amazon.com/images/I/51gum4+yVbL._AC_UY218_.jpg"/>
                    <Product
                        id='1234'
                        title="Logitech 罗技 G502 Lightspeed 无线游戏鼠标 带 Hero 25K 传感器 支持PowerPlay 可调重量和Lightsync RGB 黑色"
                        price={118.00}
                        image="https://m.media-amazon.com/images/I/71uNZAdQOoL._AC_UY218_.jpg"/>
                </div>
                <div className="home_row">
                    <Product
                        id='123451'
                        title="Sony X800H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model & Soundbar with Wireless Subwoofer"
                        price={1499.99}
                        image="https://m.media-amazon.com/images/I/81R9w-DoyAL._AC_UY218_.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Home;