// Import necessary modules and dependencies
const express = require('express'); // Express web framework for Node.js
const router = express.Router(); // Create an instance of Express router
const Product = require('../models/productModel'); // Import the Product model

// Route to get all products
router.get('/products', async (req, res) => {
    try {
        // Retrieve all products from the database using the Product model
        const products = await Product.find();
        // Send a response with the retrieved products as the 'data' property
        res.status(200).send({ data: products });
    } catch (err) {
        // If an error occurs during the database operation, send an error response
        res.status(400).send({ error: err });
    }
});

// Route to get products grouped by sushi categories
router.get('/products-by-sushiCategories', async (req, res) => {
    try {
        // Perform an aggregation query to group products by 'category' field
        const products = await Product.aggregate([
            // First stage: Match all documents (no specific conditions)
            { $match: {} },
            // Second stage: Group documents by 'category' and create an array of products for each category
            {
                $group: {
                    _id: '$category', // Group by the 'category' field
                    products: { $push: '$$ROOT' }, // Create an array of products for each category
                },
            },
            // Third stage: Project the result to rename '_id' as 'name' and exclude '_id' field
            { $project: { name: '$_id', products: 1, _id: 0 } },
        ]);
        // Send a response with the grouped products as the 'data' property
        res.status(200).send({ data: products });
    } catch (err) {
        // If an error occurs during the database operation, send an error response
        res.status(400).send({ error: err });
    }
});

module.exports = router; // Export the router for use in other parts of the application
