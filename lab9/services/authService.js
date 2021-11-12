const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/user')

const signup = (req, res, successPath, errorPath) => {
    const {
        username,
        password
    } = req.body
    try {
        validateSignup(username, password)

        User.register({
            username: req.body.username
        }, req.body.password, (e, user) => {
            if (e) {
                throw e
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect(successPath)
                })
            }
        })
    } catch (e) {
        console.log('authService-Error: ' + e)
        res.redirect(errorPath)
    }
}

const login = (req, res, successPath, errorPath) => {
    const {
        username,
        password
    } = req.body

    try {
        validateLogin(username, password)

        const user = new User({
            username: username,
            password: password
        });
        req.login(user, (err) => {
            if (err) {
                console.log(err)
                res.redirect("/")
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect(successPath)
                })
            }
        })
    } catch (e) {
        console.log('authService-Error: ' + e)
        res.redirect(errorPath)
    }
}

const logout = (req, res, successPath) => {
    //According to passport, .logout() never fails, so we only have a success path
    req.logout()
    res.redirect(successPath)
}

module.exports = {
    signup,
    login,
    logout
}

function validateLogin(email, pword) {
    if (email.length > 3 && pword.length > 2) {
        return
    } else {
        throw 'Email and password must be more than 2 characters'
    }
}

function validateSignup(email, pword, auth) {
    if (email.length > 2 && pword.length > 2) {
        return
    } else {
        throw 'Email and password must be more than 2 characters'
    }
}