let todos = [
    { id: 1, task: "Learn Express", completed: false }
];

// GET all todos
const getTodos = (req, res) => {
    res.render('index', { todos });
};

// CREATE todo
const createTodo = (req, res) => {
    const { task } = req.body;

    if (!task) return res.redirect('/');

    const newTodo = {
        id: Date.now(),
        task,
        completed: false
    };

    todos.push(newTodo);
    res.redirect('/');
};

// SHOW edit form
const getEditForm = (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);

    if (!todo) return res.redirect('/');

    res.render('edit', { todo });
};

// UPDATE todo
const updateTodo = (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);

    if (todo) {
        todo.task = req.body.task;
        todo.completed = req.body.completed === 'on';
    }

    res.redirect('/');
};

// DELETE todo
const deleteTodo = (req, res) => {
    todos = todos.filter(t => t.id != req.params.id);
    res.redirect('/');
};

module.exports = {
    getTodos,
    createTodo,
    getEditForm,
    updateTodo,
    deleteTodo
};