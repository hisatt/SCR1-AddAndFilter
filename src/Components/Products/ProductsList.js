import React from 'react';
import ProductsItem from "./ProductsItem";
import './ProductsList.css';


const ProductsList = (props) => {

    return (
        <ul className="products-list">
            {props.products.map((product) => (
                <ProductsItem
                key={product.id}
                productName={product.productName}
                category={product.category}
                />
            ))}
        </ul>
    )
}

export default ProductsList;