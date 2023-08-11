// Import required modules and libraries
const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

// Define the main function as an asynchronous function
async function main() {
    // MongoDB connection URI
    const uri = "mongodb://localhost://27017";
    // Create a new MongoDB client instance
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the "products" and "sushiCategories" collections in the "sushie-ordering-app" database
        const productsCollection = client.db("sushie-ordering-app").collection("products");
        const categoriesCollection = client.db("sushie-ordering-app").collection("sushiCategories");

        // Define sushi categories and insert them into the "sushiCategories" collection
        let sushiCategories = ['Japannese Sushi', 'Mexico Sushi', 'Korean Sushi', 'Chinese Sushi'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(sushiCategories);

        // Define an array of image URLs for the sushi products
        let imageUrls = [
            'https://res.cloudinary.com/dfru1ciwe/image/upload/v1690439497/capstone/raw_nt0s6w.png',
            'https://res.cloudinary.com/dfru1ciwe/image/upload/v1690437753/capstone/two_sushi_b3lkrm.png',
            'https://res.cloudinary.com/dfru1ciwe/image/upload/v1690441122/capstone/samu_rbs91k.png',
            'https://res.cloudinary.com/dfru1ciwe/image/upload/v1690443365/capstone/wow_good_qzopg6.png',
            'https://res.cloudinary.com/dfru1ciwe/image/upload/v1690444294/capstone/platter_tee6sg.webp',
         
        
        ];

        // Drop the existing "products" collection to start fresh not necessary but, its good to keep names and descriptions going.
        await productsCollection.drop();

        // Array to store the generated sushi products
        let products = [];

        // Arrays of sushi names, adjectives, and descriptions
        let sushiNames = [
            'California Roll',
            'Spicy Tuna Roll',
            'Dragon Roll',
            'Sashimi Platter',
            'Tempura Roll',
            'Rainbow Roll',
            'Salmon Nigiri',
            'Eel Roll',
            'Volcano Roll',
            'Caterpillar Roll'
        ];

        let sushiAdjectives = [
            'Delicious',
            'Fresh',
            'Exquisite',
            'Mouthwatering',
            'Authentic',
            'Divine',
            'Delectable',
            'Tasty',
            'Savory',
            'Succulent'
        ];

        let sushiDescriptions = [
            'A classic sushi roll filled with crab, avocado, and cucumber.',
            'A perfect blend of spice and flavor.',
            'An elegant roll with eel, avocado, and flying fish roe.',
            'A mouthwatering combination of salmon and avocado.',
            'A delightful roll topped with spicy tuna.',
            'A scrumptious sushi platter featuring a variety of fish.',
            'A heavenly roll with tempura shrimp and avocado.',
            'A delectable combination of eel and cucumber.',
            'A delicious roll with salmon and cream cheese.',
            'A savory sushi roll with eel and avocado.'
        ];

        // Shuffle the arrays to avoid repetitions of sushi names, adjectives, and descriptions
        sushiNames = _.shuffle(sushiNames);
        sushiAdjectives = _.shuffle(sushiAdjectives);
        sushiDescriptions = _.shuffle(sushiDescriptions);

        // Generate and insert 10 fake sushi products into the "products" collection
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
                name: `${sushiAdjectives[i]} ${sushiNames[i]}`,
                adjective: sushiAdjectives[i],
                description: sushiDescriptions[i],
                price: faker.commerce.price(),
                category: _.sample(sushiCategories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }

        // Insert the generated sushi products into the "products" collection
        await productsCollection.insertMany(products);
    } catch (e) {
        // If an error occurs, log the error message to the console
        console.error(e);
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}

// Call the main function to start the seeding process
main();
