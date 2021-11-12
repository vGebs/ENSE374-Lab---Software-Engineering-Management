const mongoose = require('mongoose')
const passport = require('passport')
const passportLocalMongoose = require("passport-local-mongoose")
const authService = require('../services/authService')

const signup = (req, res) => {
    console.log("User " + req.body.username + " is attempting to register")

    const successPath = '/todo'
    const failurePath = '/'

    authService.signup(req, res, successPath, failurePath)
}

const login = (req, res) => {
    console.log("User " + req.body.username + " is attempting to log in");

    const successPath = '/todo'
    const failurePath = '/'

    authService.login(req, res, successPath, failurePath)
}

const logout = (req, res) => {
    console.log("User " + req.body.username + " is logging out")

    //According to passport, .logout() never fails, so we only have a success path
    const successPath = '/'

    authService.logout(req, res, successPath)
}

module.exports = {
    signup,
    login,
    logout
}