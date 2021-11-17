const Task = require('../models/task')
const taskService = require('../services/taskService')
const User = require('../models/user')

const todo = async (req, res) => {

    const successPath = "todo"
    const failurePath = "/"

    if (req.isAuthenticated()) {
        console.log("todoController: User is authenticated")
        //after we verify the user, we have to pull all tasks
        //After we pull all tasks, we will render the the todo.ejs

        try {
            const tasks = await taskService.readAllTasks()
            console.log("todoController: Got tasks")

            res.render(successPath, {
                username: req.session.uname,
                tasks: tasks
            })
        } catch (e) {
            res.redirect(failurePath)
        }
    } else {
        console.log("todoController: User is not authenticated")
        res.redirect(failurePath)
    }
}

const addTask = async (req, res) => {
    console.log(req.body.taskText)

    let task = new Task({
        text: req.body.taskText,
        state: "",
        creator: req.body.username,
        isTaskClaimed: false,
        claimingUser: "",
        isTaskDone: false,
        isTaskCleared: false
    })

    const path = "/todo"

    try {
        await taskService.createTask(task)
        res.redirect(path)
    } catch (e) {
        res.redirect(path)
    }
}

const claimTask = async (req, res) => {
   
    const update = {
        isTaskClaimed: true,
        claimingUser: req.session.uname
    }

    try {
        await taskService.updateTask(req.body.taskID, update)
        console.log('todoController: Successfully claimedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const abandonTask = async (req, res) => {

    const update = {
        isTaskClaimed: false,
        claimingUser: ""
    }

    try {
        await taskService.updateTask(req.body.taskID, update)
        console.log('todoController: Successfully abandonedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const completeTask = async (req, res) => {

    const update = {
        isTaskDone: true
    }

    try {
        await taskService.updateTask(req.body.taskID, update)
        console.log('todoController: Successfully completedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const unFinishTask = async (req, res) => {

    const update = {
        isTaskDone: false
    }

    try {
        await taskService.updateTask(req.body.taskID, update)
        console.log('todoController: Successfully unFinishedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const purgeTasks = async (req, res) => {

    const filter = {isTaskDone: true}

    const update = {
        isTaskCleared: true
    }

    try {
        await taskService.updateTasks(filter, update)
        console.log('todoController: Successfully purgedTasks')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const viewCompleted = async (req, res) => {
    const filter = {isTaskCleared: true}

    const update = {
        isTaskCleared: false
    }

    try {
        await taskService.updateTasks(filter, update)
        console.log('todoController: Successfully unPurgedTasks')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

module.exports = {
    todo,
    addTask,
    claimTask,
    abandonTask,
    completeTask,
    unFinishTask,
    purgeTasks,
    viewCompleted
}