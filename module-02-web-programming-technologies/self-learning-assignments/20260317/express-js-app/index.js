const express = require('express');

const app = express();

const userRoutes = require('./routes/user.route.js');

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

// Root Route
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});