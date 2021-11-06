const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id: Number,
    text: String,
    state: String,
    creator: Number,
    isTaskClaimed: Boolean,
    claimingUser: Number,
    isTaskDone: Boolean,
    isTaskCleared: Boolean
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;