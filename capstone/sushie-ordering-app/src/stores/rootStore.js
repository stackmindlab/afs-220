// Import necessary modules and functions from Redux
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Import the Redux Thunk middleware
import rootReducer from "./rootReducer"; // Import the root reducer containing all the slice reducers

// Configure the Redux store using the rootReducer and apply the Redux Thunk middleware
const store = configureStore({
  reducer: rootReducer, // Set the root reducer to handle the state of the entire application
}, applyMiddleware(thunk)); // Apply the Redux Thunk middleware to enable asynchronous actions

// Export the configured Redux store so that it can be used in the application
export default store;
