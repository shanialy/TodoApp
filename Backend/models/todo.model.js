const mongoose = require('mongoose');

const SubtaskSchema = new mongoose.Schema({
  subtaskName: { type: String, required: true },
  checked: { type: Boolean, default: false },
});

const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  checked: { type: Boolean, default: false },
  subtasks: [SubtaskSchema],
});

const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  tasks: [TaskSchema],
});

const TodosSchema = new mongoose.Schema({
  data: [CategorySchema],
});

module.exports = mongoose.model('Todos', TodosSchema);