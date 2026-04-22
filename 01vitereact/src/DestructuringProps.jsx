import React, { useTransition } from "react";
export const ProductRender = ({ title, price, inStock, category }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Price :Rs.{price} </p>
            <p>InStock : {inStock ? "Avilable" : "Out of Stock"}</p>
            <p>Category : {category.join(",")}</p>
        </div>
    )
}

export default ProductRender