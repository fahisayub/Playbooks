import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [40, 'Title cannot be more than 40 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true,
    maxlength: [20, 'Category cannot be more than 20 characters']
  },
  dueDate: {
    type: Date,
    required: [true, 'Please add a due date']
  },
  reminder: {
    type: Date,
    required: [true, 'Please add a reminder date']
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
