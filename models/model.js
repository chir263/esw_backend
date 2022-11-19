const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  t: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Task", TaskSchema);
