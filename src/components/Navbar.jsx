import React from "react";
import LittleAction from "./LittleAction";
import Search from "./Search";


function Navbar()
{
    return (
       <div className="Navbar">
            <img style={{marginLeft:"10px" }} height="25px" src="https://static.cdnlogo.com/logos/a/83/amazon-com.svg" />
            <LittleAction icon="fa-solid fa-location-dot" top="Hello" bottom="Select your address" /> 
            <Search />
            <LittleAction icon="" top="Hello, Sign in" bottom="Accounts & Lists" /> 
            <LittleAction icon="" top="Returns" bottom="& Orders" /> 
            <div><i style={{fontSize:"20px"}} className="fa-regular fa-cart-arrow-down"></i> <b style={{fontSize:"16px", marginRight:"10px"}}>Cart</b></div>
       </div>
    )
}

export default Navbar;