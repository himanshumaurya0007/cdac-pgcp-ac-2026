const express = require('express');
const router = express.Router();

const {
    getTodos,
    createTodo,
    getEditForm,
    updateTodo,
    deleteTodo
} = require('../controllers/todo.controller.js');

// Read
router.get('/', getTodos);

// Create
router.post('/add', createTodo);

// Edit Form
router.get('/edit/:id', getEditForm);

// Update
router.put('/update/:id', updateTodo);

// Delete
router.delete('/delete/:id', deleteTodo);

module.exports = router;