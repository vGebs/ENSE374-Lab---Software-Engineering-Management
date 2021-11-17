const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    text: String,
    state: String,
    creator: String,
    isTaskClaimed: Boolean,
    claimingUser: String,
    isTaskDone: Boolean,
    isTaskCleared: Boolean
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;