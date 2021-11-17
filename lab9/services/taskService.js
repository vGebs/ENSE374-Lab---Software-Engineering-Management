const Task = require('../models/task')
const mongoose = require('mongoose')

const createTask = async (task) => {
    try {
        await task.save()
        return
    } catch (e) {
        console.log("taskService-error: " + e)
        throw e
    }
}

const readTasksFromUser = (req, res, id) => {
    
}

const readAllTasks = async () => {
    try {
        const tasks = await Task.find()
        console.log("taskService: Got tasks")
        return tasks 
    } catch (e) {
        console.log("taskService-erro: " + e)
        throw e
    }
}

const updateTask = async (id, update) => {
    try {
        await Task.findByIdAndUpdate(id, update)
        console.log('taskService: Successfully updated task')
    } catch (e) {
        console.log('taskService-error: ' + e)
        throw e
    }
}

const updateTasks = async (filter, update) => {
    try {
        await Task.updateMany(filter, update)
        console.log('taskService: Successfully updated task')
    } catch (e) {
        console.log('taskService-error: ' + e)
        throw e
    }
}

const deleteTask = (req, res) => {

}

module.exports = {
    createTask,
    readAllTasks,
    updateTask,
    updateTasks
}