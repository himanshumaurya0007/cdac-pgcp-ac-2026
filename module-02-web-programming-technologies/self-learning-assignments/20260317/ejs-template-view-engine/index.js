// index.js
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const todoRoutes = require('./routes/todo.route.js');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', todoRoutes);

// Server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});