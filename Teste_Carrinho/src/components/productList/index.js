import React from "react";
import "./styles.css";

function ProductList(props) {
    return (
        <div className="product-list">
            <img src={props.productImage} alt={props.alt} />
            <div className="product-details">
                <h3>{props.productName}</h3>
                <p>{props.costPrice}</p>
                <p>{props.salePrice}</p>
            </div>
        </div>
    )
}

export default ProductList;