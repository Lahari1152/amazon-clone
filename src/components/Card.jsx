import React from "react";

function Card(props)
{
    return (
        <div className=" col-sm-6 col-md-4 col-lg-3" style={{padding:"5px"}}>
            <div className="prod-card">
            <h3>{props.title}</h3>
            <img src={props.src} className=""/>
            <p>See more</p>
            </div>
        </div>
    )
}

export default Card;