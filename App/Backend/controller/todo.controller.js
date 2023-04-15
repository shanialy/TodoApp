const express = require('express');
const router = express.Router();
const TodoModal = require('../models/todo.model');
const {AllTodos} = require('../services/todo.service');
const mongodb = require('mongodb')

module.exports.todos = async (req,res)=>{
    console.log('call')
    try{
         const todos = await AllTodos()
         console.log(todos)
         if (!todos){
             res.json('error')
         }else{
             res.json(todos).status(200)
         }
 
     }catch(err){
         res.json(err).status(400)
     }}


module.exports.addTodo = async (req,res)=>{
    try {
        const category = req.params.category;
        const taskName = req.body.taskName;
        const checked = false;
        if (!category || !taskName) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
    
        const client = await mongodb.MongoClient.connect('mongodb+srv://xhanialee:EBV4te3HbIuKPbz2@cluster0.krucfff.mongodb.net/test?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        const db = client.db();
    
        const result = await db.collection('test/todos').updateOne(
          { category: category },
          {
            $push: {
              tasks: {
                taskName: taskName,
                checked: checked,
                subtasks: [],
              },
            },
          }
        );
    
        client.close();
        res.status(201).json({ message: 'Task added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports.updateCategory = async (req,res)=>{ 
    try{
      const body = {
        completed : req.body.completed
      }
        const updatedCategory = {$set : body ,new : true}
        await UpdateCategory(req.params.id , updatedCategory)
         res.json(updatedCategory).status(200)

    }catch(err){
      res.json(err).status(400)
    }
}