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
let task1 = {
    id: "task1", 
    text: "task1", 
    state: "", 
    creator: userModel.users[0], 
    isTaskClaimed: false, 
    claimingUser: "", 
    isTaskDone: false, 
    isTaskCleared: false 
}

// 1 claimed by user1 and unfinished
let task2 = {
    id: "task2", 
    text: "task2",
    state: "", 
    creator: userModel.users[0], 
    isTaskClaimed: true, 
    claimingUser: userModel.users[0],
    isTaskDone: false,
    isTaskCleared: false 
}

// 1 claimed by user2 and unfinished
let task3 = {
    id: "task3", 
    text: "task3", 
    state: "", 
    creator: userModel.users[1], 
    isTaskClaimed: true, 
    claimingUser: userModel.users[1], 
    isTaskDone: false, 
    isTaskCleared: false 
}

// 1 claimed by user1 and finished
let task4 = {
    id: "task4", 
    text: "task4", 
    state: "", 
    creator: userModel.users[0], 
    isTaskClaimed: true, 
    claimingUser: userModel.users[0], 
    isTaskDone: true, 
    isTaskCleared: false 
}

// 1 claimed by user2 and finished
let task5 = {
    id: "task5", 
    text: "task5", 
    state: "", 
    creator: userModel.users[1], 
    isTaskClaimed: true, 
    claimingUser: userModel.users[1], 
    isTaskDone: true, 
    isTaskCleared: false 
}


// Task Array ======================================================================================>

let tasks = [task1, task2, task3, task4, task5]

// Exports ==========================================================================================>

module.exports = {
    Task,
    tasks
}