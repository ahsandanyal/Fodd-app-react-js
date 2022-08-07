import React from "react";
import background from "../assests/background.jpg";
import "../styles/Home.css";

function Home (){


    return(
    <div className="home" style={{backgroundImage: `url(${background})`}}>

        <div className="headerContainer">
            <h1 className="foodHeading">Food Corner</h1>
            <p className="paraIndianfood">INDIAN FOOD AT A CLICK</p>
            <buton className="orderNowBtn">Order Now</buton>
        </div>
    </div>
    );
}


export default Home;