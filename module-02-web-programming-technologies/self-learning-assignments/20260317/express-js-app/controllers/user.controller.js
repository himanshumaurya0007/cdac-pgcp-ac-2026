let users = [
    { id: 1, name: "Himanshu" }
];

// GET all users
exports.getUsers = (req, res) => {
    res.json({ success: true, data: users });
};

// GET single user
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, data: user });
};

// POST create user
exports.createUser = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    res.status(201).json({ success: true, data: newUser });
};

// PUT update user
exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.name = req.body.name || user.name;

    res.json({ success: true, data: user });
};

// DELETE user
exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1);

    res.json({ success: true, data: deletedUser });
};