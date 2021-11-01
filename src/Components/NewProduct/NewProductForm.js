import React, { useState } from 'react';
import './NewProductForm.css'

const NewProductForm = (props) => {
    const [enteredProductName, setEnteredProductName] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredLiked, setEnteredLiked] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const productNameChangeHandler = (event) => {
        setEnteredProductName(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    }

    const likedChangeHandler = (event) => {
        setEnteredLiked(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const productData = {
            productName: enteredProductName,
            category: (enteredCategory === "") ? "Car" : enteredCategory,
            liked: enteredLiked,
            price: enteredPrice,
            date: new Date(enteredDate)
        };

        props.onSaveProductData(productData);

        setEnteredProductName("");
        setEnteredCategory("");
        setEnteredLiked("");
        setEnteredPrice("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-product__controls flex__controls">
                <div className="new-product-form__control flex__controls">
                    <input type="text" value={enteredProductName} placeholder="Product Name" onChange={productNameChangeHandler} required></input>
                    {/* <input type="text" value={enteredCategory} placeholder="Category" onChange={categoryChangeHandler}></input> */}
                    <select value={enteredCategory} onChange={categoryChangeHandler} placeholder="Choose One" required>
                        <option value='Car'>Car</option>
                        <option value='Motorcycle'>Motorcycle</option>
                        <option value='Bicycle'>Bicycle</option>
                    </select>
                    <input type="number" value={enteredLiked} placeholder="Liked" onChange={likedChangeHandler} required></input>
                    <input type="number" value={enteredPrice} placeholder="Price" onChange={priceChangeHandler} required></input>
                    <input type="date" value={enteredDate} placeholder="Date" onChange={dateChangeHandler} required></input>
                </div>
                <button type="submit" class="btnSubmit">Submit</button>
            </div>
        </form>
    )
}

export default NewProductForm;