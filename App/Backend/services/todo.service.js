const req = require('express/lib/request');
const res = require('express/lib/response');
const TodoModal = require('../models/todo.model');

const AddTodoService = async function(Student){
    try {
        const addstudent = await new TodoModal(Student)
        return addstudent;
    } catch (error) {
        res.status(500).json(error)
    }
}

const AllTodos = async function(){
    try{
        const todos = await TodoModal.find()
        return todos;
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {AddTodoService,AllTodos}