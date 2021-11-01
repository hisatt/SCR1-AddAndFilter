import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import NewProduct from './Components/NewProduct/NewProduct';
import Products from './Components/Products/Products';



const DUMMY_PRODUCTS = [
  {
    id: "1",
    productName: "BMW E30",
    category: "Car",
    liked: 200,
    price: 12345678,
    date: new Date(2019, 7, 12)
  },
  {
    id: "2",
    productName: "Toyota GR Supra",
    category: "Car",
    liked: 100,
    price: 12345678,
    date: new Date(2019, 8, 12)
  },
  {
    id: "3",
    productName: "KTM 450 EXC",
    category: "Motorcycle",
    liked: 200,
    price: 12345678,
    date: new Date(2019, 8, 12)
  },
  {
    id: "4",
    productName: "Santa Cruz Nomad 4",
    category: "Bicycle",
    liked: 200,
    price: 12345678,
    date: new Date(2019, 8, 12)
  },
  {
    id: "5",
    productName: "TREK Madone SLR 9 eTap",
    category: "Bicycle",
    liked: 200,
    price: 12345678,
    date: new Date(2019, 8, 12)
  }

];

const App = () => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      return [product, ...prevProducts];
    });
  };

  return (
    <div className="container">
      <NewProduct onAddProduct={addProductHandler} />
      <Products products={products} />
    </div>
  );
}

export default App;
