const userModel = require('../models/user')
const taskModel = require('../models/task')

const addTask = (req, res) => {
    console.log(req.body.taskText)

    let task = {
        text: req.body.taskText,
        state: "",
        creator: userModel.users[0],
        isTaskClaimed: false,
        claimingUser: "",
        isTaskDone: false,
        isTaskCleared: false
    }

    let oldTasks = jsonFuncs.loadTasksFromJson()

    oldTasks.push(task)

    jsonFuncs.saveTasksToJson(oldTasks)

    let tasks = jsonFuncs.loadTasksFromJson()

    res.render("todo", {
        username: req.body.email,
        tasks: tasks
    })
}

const claimTask = (req, res) => {
    console.log(req.params.taskID)

    res.render("todo", {
        username: req.body.email,
        tasks: taskModel.tasks
    })
}

const abandonTask = (req, res) => {

}

const completeTask = (req, res) => {

}

const unFinishTask = (req, res) => {

}

const purgeTasks = (req, res) => {

}

module.exports = {
    addTask,
    claimTask,
    abandonTask,
    completeTask,
    unFinishTask,
    purgeTasks
}