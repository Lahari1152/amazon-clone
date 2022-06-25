import React from "react";

function LittleAction(props)
{

    return (
        <div className="little-action">
            <p>{props.top}</p>
            <p><i className={props.icon}> </i> <b> {props.bottom}</b></p>
        </div>
    )

}

export default LittleAction;