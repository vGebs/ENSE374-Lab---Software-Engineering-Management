const mongoose = require('mongoose')
const passport = require('passport')
const passportLocalMongoose = require("passport-local-mongoose")
const bcrypt = require('bcryptjs')
const taskModel = require('../models/task')
const User = require('../models/user')
const authService = require('../services/authService')

const signup = (req, res) => {
    console.log("User " + req.body.username + " is attempting to register");
    User.register({
            username: req.body.username
        },
        req.body.password,
        (err, user) => {
            if (err) {
                console.log(err)
                res.redirect("/")
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect('/todo')
                })
            }
        })
}

const login = (req, res) => {
    console.log("User " + req.body.username + " is attempting to log in");
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, (err) => {
        if (err) {
            console.log(err)
            res.redirect("/")
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/todo")
            })
        }
    })
}

const logout = (req, res) => {
    console.log("A user is logging out")
    req.logout()
    res.redirect("/")
}

module.exports = {
    signup,
    login,
    logout
}