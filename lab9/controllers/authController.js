const mongoose = require("mongoose")
const taskModel = require('../models/task')
const userModel = require('../models/user')
const authService = require('../services/authService')

const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateLogin(req.body.email, req.body.password)) {
            //taskModel.generateTasks()
            try {
                const tasks = await taskModel.find()
                console.log(tasks)
                res.render("todo", {
                    username: req.body.email,
                    tasks: tasks
                })
            } catch (err) {
                console.log(error)
            }
        } else {
            res.redirect('/')
        }
    }
}

const signup = async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.auth) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateSignup(req.body.email, req.body.password, req.body.auth)) {
            //taskModel.generateTasks()

            try {
                const tasks = await taskModel.find()
                console.log(tasks)
                res.render("todo", {
                    username: req.body.email,
                    tasks: tasks
                })
            } catch (err) {
                console.log(error)
            }
        } else {
            res.redirect('/')
        }
    }
}

const logout = (req, res) => {
    res.redirect('/')
}

module.exports = {
    login,
    signup,
    logout
}