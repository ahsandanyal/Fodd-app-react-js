import React from "react";
import  Data  from "../Data/Data";
import "../styles/Menu.css";
import Menuitem from "../components/Menuitem";

function Menu(){
   
    return(
    <div className="menu">
       <div className="menuTitle">
          <div className="menuList">
           {Data.map((menuItem, key)=>{
              return( <Menuitem
               key={key}
                name={menuItem.name}
                img={menuItem.img}
                price={menuItem.price}
                />);
              
           })}
              
           
          </div>
       </div>
    </div>
    );
              
}


export default Menu;