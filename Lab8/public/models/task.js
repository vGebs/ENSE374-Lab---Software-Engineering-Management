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

// function generateTasks() {
//     const task1 =  new Task ({
//         id: 1,
//         text: "Task1",
//         state: null,
//         creator: 0,
//         isTaskClaimed: false,
//         claimingUser: null,
//         isTaskDone: false,
//         isTaskCleared: false
//     });

//     task1.save();

//     const task2 =  new Task ({
//         id: 2,
//         text: "Task2",
//         state: null,
//         creator: 0,
//         isTaskClaimed: true,
//         claimingUser: 0,
//         isTaskDone: false,
//         isTaskCleared: false
//     });

//     task2.save();

//     const task3 =  new Task ({
//         id: 3,
//         text: "Task3",
//         state: null,
//         creator: 1,
//         isTaskClaimed: true,
//         claimingUser: 1,
//         isTaskDone: false,
//         isTaskCleared: false
//     });

//     task3.save();

//     const task4 =  new Task ({
//         id: 4,
//         text: "Task4",
//         state: null,
//         creator: 0,
//         isTaskClaimed: true,
//         claimingUser: 0,
//         isTaskDone: true,
//         isTaskCleared: false
//     });

//     task4.save();

//     const task5 =  new Task ({
//         id: 5,
//         text: "Task5",
//         state: null,
//         creator: 1,
//         isTaskClaimed: true,
//         claimingUser: 1,
//         isTaskDone: true,
//         isTaskCleared: false
//     });

//     task5.save();
// }