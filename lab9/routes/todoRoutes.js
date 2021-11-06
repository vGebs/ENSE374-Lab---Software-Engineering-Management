const express = require('express')
const router = express.Router()
const userModel = require('../public/models/user')
const Task = require('../public/models/task')

router.post('/addTask', (req, res) => {
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
})

router.post('/claimTask/', (req, res) => {
    console.log(req.params.taskID)

    res.render("todo", {
        username: req.body.email,
        tasks: taskModel.tasks
    })
})

router.post('/abandon', (req, res) => {

})

router.post('/complete', (req, res) => {

})

router.post('/unFinish', (req, res) => {

})

router.post('/purge', (req, res) => {

})

module.exports = router