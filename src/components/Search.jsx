import React from "react";

function Search()
{
    return (
        <div className="search">
            <p style={{fontSize:"12px", }}> All </p>
            <input type="search"/>
            <div>
                <i className="fa-regular fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Search;