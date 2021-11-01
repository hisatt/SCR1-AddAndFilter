
import NewProductForm from "./NewProductForm";

const NewProduct = (props) => {

    const onSaveProductDataHandler = (enteredProductData) => {
        const productData = {
            ...enteredProductData,
            id: Math.random().toString()
        };
        props.onAddProduct(productData);

    }

    return (
        <div className="new-product">
            <h1>Add Product</h1>
            <NewProductForm onSaveProductData={onSaveProductDataHandler} />
        </div>

    )
}

export default NewProduct;