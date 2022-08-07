import React from "react";
import "../styles/Navbar.css";
import logo from '../assests/logo.png';

import  {Link}  from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar (){
   return(
    <div className="navbar">
       <div className="leftSide">
        <img src={logo} alt="logo"/>
       </div>
       <div className="rightSide">
         <Link activeClassName="is-active" to="/">Home</Link>
         <Link activeClassName="is-active" to="/menu">Menu</Link>
         <Link activeClassName="is-active" to="/about">About</Link>
         <Link activeClassName="is-active" to="/contact">Contact</Link>
       <button className="btn-reorder"><ReorderIcon/></button>
       
       </div>
    </div>
   )
}

export default Navbar;