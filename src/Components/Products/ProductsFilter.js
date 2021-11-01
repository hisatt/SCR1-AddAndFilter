import React from 'react';
import './ProductsFilter.css';

const ProductFilter = (props) => {

    const onSelectHandler = (event) => {
        props.onSelectCategory(event.target.value);
    }

    return (
        <div className="product-filter">
            <div className="product-filter__control">
                <button onClick={onSelectHandler} value="all-products">All Products</button>
                <button onClick={onSelectHandler} value="Car">Cars</button>
                <button onClick={onSelectHandler} value="Motorcycle">Motorcycles</button>
                <button onClick={onSelectHandler} value="Bicycle">Bicycles</button>
            </div>
        </div>
    )
}

export default ProductFilter;