// Import the AddProduct component from the "./AddProduct" file
import { AddProduct } from "./AddProduct";

// ProductPreviewCard is a functional component that receives two props: "product" and "onAddProduct"
export const ProductPreviewCard = ({ product, onAddProduct }) => {
    
    // Define a function named "addProduct"
    const addProduct = () => {
        onAddProduct(product)
        // TODO: Implement Redux logic here to add the product to the state
    }

    // Render the ProductPreviewCard component
    return (
        // The outer container div with some styling classes
        <div className="w-full p-4 m-2 rounded white-red bg-gradient-to-b from-slate-600 to-transparent text-center">
            {/* Display the product's image with its name as the alt text */}
            <img src={product.imageUrl} alt={product.name} />

            {/* Display the product's name */}
            <h2 className="pb-2 text-lg">{product.name}</h2>

            {/* Display a truncated description of the product */}
            <p className="mb-2 h-20 line-clamp-4">{product.description}</p>

            {/* Render the AddProduct component and pass the "addProduct" function as a prop */}
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}
