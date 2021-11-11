const mongoose = require('mongoose')
const passport = require('passport')
//const userModel = require('../models/userModel')

// passport.use(userModel.createStrategy());

// passport.serializeUser(userModel.serializeUser());
// passport.deserializeUser(userModel.deserializeUser());

function login(email, password) {
    if (!validateLogin(email, password)){
        throw "Username and password have more than 3 chars"
    } else {

    }
}

function validateLogin(email, pword) {
    if (email.length > 3 && pword.length > 2){
        return true
    } else {
        return false
    }
}

function validateSignup(email, pword, auth){
    if (email.length > 3 && pword.length > 2 && auth.length > 2){
        return true
    } else {
        return false
    }
}

module.exports = { validateLogin, validateSignup }