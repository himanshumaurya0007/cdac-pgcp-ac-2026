const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller.js');

// 1. GET all users
router.get('/', getUsers);

// 2. GET user by ID
router.get('/:id', getUserById);

// 3. POST create user
router.post('/', createUser);

// 4. PUT update user
router.put('/:id', updateUser);

// 5. DELETE user
router.delete('/:id', deleteUser);

module.exports = router;