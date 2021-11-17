const Task = require('../models/task')
const mongoose = require('mongoose')

const createTask = async (req, res, task) => {
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

const readAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        console.log("taskService: Got tasks")
        return tasks 
    } catch (e) {
        console.log("taskService-erro: " + e)
    }
}

const updateTask = async (req, res, filter, update) => {
    try {
        await Task.findOneAndUpdate(filter, update)
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
    updateTask
}