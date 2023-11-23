const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["High", "Moderate", "Low"],
    default: "Moderate"
  },
  dueDate: {
    type: String, // Assuming due date is a date
    required: true,
  }
}, {
  timestamps: true
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
