import React from "react";
import Tag from "./Tag"

function Tags()
{
    return (
        <div className="tags-area">
            <p><i className="fa-regular fa-bars"></i><b> All</b></p>
            <Tag text="Best Sellers" />
            <Tag text="Mobiles" />
            <Tag text="Customer Service" />
            <Tag text="Today's Deals" />
            <Tag text="Fashion" />
            <Tag text="Electronics" />
            <Tag text="Prime" />
            <Tag text="Home & Kitchen" />
            <Tag text="Amazon Pay" />
            <Tag text="New Release" />
            <Tag text="Books" />
            <Tag text="Computers" />
            <Tag text="Toys & Games" />
            <Tag text="Coupons" />
        </div>
    )
}

export default Tags;