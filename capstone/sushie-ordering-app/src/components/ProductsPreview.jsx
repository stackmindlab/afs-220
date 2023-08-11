// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";


// Define the functional component ProductsPreview
export const ProductsPreview = () => {
    // State to hold the list of products fetched from the API
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    // Responsive configuration for the carousel
    const responsive = {
        superLargeDesktop: {
            // Settings for very large desktop screens
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            // Settings for desktop screens
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            // Settings for tablet screens
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            // Settings for mobile screens
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // Fetch the list of products from the API on component mount
    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, []);

    // Callback function to handle adding a product to the cart
    const onAddProduct = (product) => {
      dispatch(addToCart(product))
        // This function will be called when the "Add to Cart" button is clicked on the ProductPreviewCard component.
        // It currently logs the product to the console but can be extended to handle adding the product to the cart state.
    }

    // Render the ProductsPreview component
    return (
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
            <h2>Products</h2>
            {/* Carousel to display the list of products */}
            <Carousel responsive={responsive}>https://res.cloudinary.com/dfru1ciwe/image/upload/v1690441122/capstone/samu_rbs91k.png
                {
                    // Check if there are products in the list and map each product to a ProductPreviewCard component
                    products.length > 0 && products.map((product, index) => {
                        return (
                            // Each product is wrapped in a div with some padding
                            <div className="w-full p-3" key={index}>
                                {/* Render the ProductPreviewCard component with the current product and the "onAddProduct" callback */}
                                <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
