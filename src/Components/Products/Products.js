import React, {useState} from 'react';
import './Products.css';
import ProductFilter from './ProductsFilter';
import ProductsList from './ProductsList';

const Product = (props) => {
    const [enteredCategory, setEnteredCategory] = useState('all-products')

    const onSelectCategoryHandler = (enteredCategory) => {
        setEnteredCategory(enteredCategory);
        console.log(setEnteredCategory);
    }

    const filteredCategory = props.products.filter(product => {
        if (enteredCategory === "all-products") {
            return product;
        }
        return product.category === enteredCategory;
    })

    console.log(filteredCategory);

    return (
        <div>
            <h1>Latest Products</h1>
            <ProductFilter onSelectCategory={onSelectCategoryHandler}/>
            <ProductsList products={filteredCategory}/>
            {/* <ProductsList products={(filteredCategory.filter === "all-products") ? props.products : filteredCategory}/> */}
        </div>
    )
}

export default Product;