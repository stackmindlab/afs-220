// Import the createSlice function from the Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Set the initial state for the cart, with an empty array of products
const initialState = {
    products: []
};

// Create a cartSlice using createSlice function
export const cartSlice = createSlice({
    // Specify the name of the slice, which will be used as the key in the Redux store
    name: 'cart',
    initialState, // Set the initial state
    reducers: {
        // Define the "addToCart" reducer, which adds a product to the cart with an initial amount of 1
        addToCart: (state, action) => {
            return { products: [...state.products, { ...action.payload, amount: 1 }] };
        },
        // Define the "clearCart" reducer, which clears all products from the cart
        clearCart: (state) => {
            return { products: [] };
        },
        // Define the "incrementProductAmount" reducer, which increments the amount of a specific product in the cart
        incrementProductAmount: (state, action) => {
            console.log('increment');
            return {
                products: state.products.map(product =>
                    product.id === action.payload.id ? { ...product, amount: product.amount + 1 } : product
                )
            };
        },
        // Define the "decrementProductAmount" reducer, which decrements the amount of a specific product in the cart
        decrementProductAmount: (state, action) => {
            return {
                products: state.products.map(product =>
                    product.id === action.payload.id ? { ...product, amount: product.amount - 1 } : product
                )
            };
        }
    }
});

// Extract the selector function to get the cart products from the Redux state
export const cartProducts = state => state.cart.products;

// Extract the action creators from the cartSlice for dispatching actions
export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions;

// Export the cartSlice.reducer, which will be used to handle the cart state in the Redux store
export default cartSlice.reducer;
