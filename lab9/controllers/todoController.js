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
            console.log(tasks)

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
        await taskService.createTask(req, res, task)
        res.redirect(path)
    } catch (e) {
        res.redirect(path)
    }
}

const claimTask = async (req, res) => {
    console.log(req.query.taskID)
    console.log(req.session.uname)

    const filter = {id: req.query.taskID}
    const update = {isTaskClaimed: true, claimingUser: req.session.uname}

    try {
        await taskService.updateTask(req, res, filter, update)
        console.log('todoController: Successfully claimedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const abandonTask = async (req, res) => {
    console.log(req.query.taskID)

    const filter = {id: req.query.taskID}
    const update = {isTaskClaimed: false, claimingUser: ""}

    try {
        await taskService.updateTask(req, res, filter, update)
        console.log('todoController: Successfully abandonedTask')
        res.redirect('/todo')
    } catch (e) {
        console.log('todoController-error: ' + e)
        res.redirect('todo')
    }
}

const completeTask = (req, res) => {

}

const unFinishTask = (req, res) => {

}

const purgeTasks = (req, res) => {

}

module.exports = {
    todo,
    addTask,
    claimTask,
    abandonTask,
    completeTask,
    unFinishTask,
    purgeTasks
}