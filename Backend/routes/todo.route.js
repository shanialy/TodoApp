const express = require('express');
const router = express.Router();
const todo = require('../controller/todo.controller');

router.route('/categories/:category').post(todo.addTodo);
router.route('/all').get(todo.todos);

module.exports = router;