import React from "react";


function Menuitem({ name, img, price }){
    return(
        <div className="menuItem">
        <div style={{ backgroundImage: `url(${img})` }}> </div>
        <h1>{name}</h1>
        <p>RS:{price}</p>
      </div>
    );
}

export default Menuitem;