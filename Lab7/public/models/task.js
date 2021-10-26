const userModel = require('./user')

// Task Object ===================================================================================>

function Task(_id, text, state, creator, isTaskClaimed, claimingUser, isTaskDone, isTaskCleared) {
    this.text = text
    this.state = state
    this.creator = creator
    this.isTaskClaimed = isTaskClaimed
    this.claimingUser = claimingUser
    this.isTaskDone = isTaskDone
    this.isTaskCleared = isTaskCleared
}


//Tasks ==========================================================================================>

// 1 unclaimed task
let task1 = new Task(
    "task1", //id
    "task1", //text
    "", //state
    userModel.users[0], //creator
    false, //isTaskClaimed
    "", //claimingUser
    false, //isTaskDone
    false //isTaskCleared
)
// 1 claimed by user1 and unfinished
let task2 = new Task(
    "task2", //id
    "task2", //text
    "", //state
    userModel.users[0], //creator
    false, //isTaskClaimed
    userModel.users[0], //claimingUser
    false, //isTaskDone
    false //isTaskCleared
)

// 1 claimed by user2 and unfinished
let task3 = new Task(
    "task2", //id
    "task2", //text
    "", //state
    userModel.users[1], //creator
    false, //isTaskClaimed
    userModel.users[1], //claimingUser
    false, //isTaskDone
    false //isTaskCleared
)

// 1 claimed by user1 and finished
let task4 = new Task(
    "task2", //id
    "task2", //text
    "", //state
    userModel.users[0], //creator
    false, //isTaskClaimed
    userModel.users[0], //claimingUser
    true, //isTaskDone
    false //isTaskCleared
)

// 1 claimed by user2 and finished
let task5 = new Task(
    "task2", //id
    "task2", //text
    "", //state
    userModel.users[1], //creator
    false, //isTaskClaimed
    userModel.users[1], //claimingUser
    true, //isTaskDone
    false //isTaskCleared
)


// Task Array ======================================================================================>

let tasks = [task1, task2, task3, task4, task5]


// Exports ==========================================================================================>

module.exports = {
    Task,
    tasks
}