const express = require('express');
const app = express();
const todoRoute = require('./routes/todo.route');
const mongoose = require("mongoose");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.use('/todo',todoRoute);

mongoose.connect('mongodb+srv://xhanialee:EBV4te3HbIuKPbz2@cluster0.krucfff.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',function(){
    console.log("Mongodb Connected");
    console.log("Welcome to Todo App");
}); 

app.listen(5000,()=>{
    console.log("Litening on port 5000");
})