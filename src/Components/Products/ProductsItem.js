import React from 'react';
import Card from "../UI/Card";
import './ProductsItem.css';
const ProductsItem = (props) => {

    return (
        <li>
            <Card classname="product-item">
                <div className="product-item__description">
                    <p>{props.productName}</p>
                    <b>{props.category.toUpperCase()}</b>
                </div>
            </Card>
        </li>
    )
}

export default ProductsItem;
