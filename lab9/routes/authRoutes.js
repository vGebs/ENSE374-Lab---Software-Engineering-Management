const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Task = require('../public/models/task')
const userModel = require('../public/models/user')

const authService = require('../services/authService')

//login form
router.post('/login', async (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateLogin(req.body.email, req.body.password)) {
            //taskModel.generateTasks()
            try {
                const tasks = await Task.find()
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
})

//signup form
router.post('/signup', async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.auth) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateSignup(req.body.email, req.body.password, req.body.auth)) {
            //taskModel.generateTasks();

            try {
                const tasks = await Task.find()
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
})

router.post('/logout', (req, res) => {
    res.redirect('/')
})

module.exports = router 