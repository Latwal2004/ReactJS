import React from "react";
export const MultipleProps = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>Price :Rs.{props.price} </p>
            <p>InStock : {props.inStock ? "Avilable" : "Out of Stock"}</p>
            <p>Category : {props.category.join(",")}</p>
        </div>
    )
}

export default MultipleProps