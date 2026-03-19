// 1. If you are cloning the repo then open the termial in "expressjs" directory.
// 2. Execute the command to install the node_modules directory: npm install
// 3. To run the project, execute the command: node index.js
// 4. Use postman to perform CRUD (Create Read Update Delete) operations 
const express = require("express");
const fs = require('fs');
const path = require("path");

const app = express();
const PORT = 8000 || 5000;


// ------- MIDDLEWARE -------
app.use(express.json());

// ------- FETCH FILE PATH -------
// https://dummyjson.com/products <- Visit the link to get the data. (Shorten it to your need)
const filePath = path.join(__dirname, "products.json");

// ------- HELPER FUNCTIONS -------
const readProducts = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

const writeProducts = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ------- VALIDATION HELPERS -------

// Check if product exists by ID
const findProductById = (products, id) => {
    return products.find(p => p.id === id);
};

// Validate product fields
const validateProduct = (product) => {
    const { id, title, description, category, price } = product;

    if (
        id === undefined ||
        !title ||
        !description ||
        !category ||
        price === undefined
    ) {
        return "All fields (id, title, description, category, price) are required";
    }

    if (typeof id !== "number" || isNaN(id)) {
        return "ID must be a valid number";
    }

    if (typeof price !== "number" || isNaN(price)) {
        return "Price must be a valid number";
    }

    return null;
};

// ------- ROUTES -------
// => Get all products
app.get('/', (req, res) => {
    try {
        const data = readProducts();
        res.status(200)
            .json(data.products);

    } catch (error) {
        res.status(500)
            .json({ message: "Error reading products" });
    }
});

// => Get a single product by ID
app.get('/:id', (req, res) => {
    try {
        const data = readProducts();
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const product = findProductById(data.products, id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product" });
    }
});

// => Add a product using query params
app.post('/add', (req, res) => {
    try {
        const data = readProducts();

        const newProduct = {
            id: parseInt(req.query.id),
            title: req.query.title,
            description: req.query.description,
            category: req.query.category,
            price: parseFloat(req.query.price),
        };

        // ✅ Validate fields
        const error = validateProduct(newProduct);
        if (error) {
            return res.status(400).json({ message: error });
        }

        // ✅ Duplicate check
        const existingProduct = findProductById(data.products, newProduct.id);
        if (existingProduct) {
            return res.status(409).json({
                message: "Product with this ID already exists"
            });
        }

        data.products.push(newProduct);
        writeProducts(data);

        res.status(201).json({
            message: "Product added (query params)",
            product: newProduct
        });

    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
});

// => Add a product using path params
app.post('/insert', (req, res) => {
    try {
        const data = readProducts();
        const newProduct = req.body;

        // ✅ Validate fields
        const error = validateProduct(newProduct);
        if (error) {
            return res.status(400).json({ message: error });
        }

        // ✅ Duplicate check
        const existingProduct = findProductById(data.products, newProduct.id);
        if (existingProduct) {
            return res.status(409).json({
                message: "Product with this ID already exists"
            });
        }

        data.products.push(newProduct);
        writeProducts(data);

        res.status(201).json({
            message: "Product added (body)",
            product: newProduct
        });

    } catch (error) {
        res.status(500).json({ message: "Error inserting product" });
    }
});

// => Delete a single product by ID
app.delete('/:id', (req, res) => {
    try {
        const data = readProducts();
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const product = findProductById(data.products, id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProducts = data.products.filter(p => p.id !== id);

        data.products = updatedProducts;
        writeProducts(data);

        res.json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error deleting product" });
    }
});

// ------- SERVER -------
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});