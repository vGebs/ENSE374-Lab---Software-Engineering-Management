//const LocalStrategy = require('passport-local').Strategy
//const bcrypt = require('bcryptjs')
const passport = require('passport')
const passportLocalMongoose = ('passport-local-mongoose')
const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.use(new LocalStrategy(User.authenticate()));

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}

// module.exports = function (passport) {
//     passport.use(
//         new LocalStrategy({
//             usernameField: 'email'
//         }, (email, password, done) => {
//             User.findOne({
//                     email: email
//                 })
//                 .then(user => {
//                     if (!user) {
//                         console.log("passport-config_error: User does not exist with this email")
//                         return done(null, false, {
//                             msg: "User does not exist with that email"
//                         })
//                     }

//                     console.log("Login -> Email: " + user.email)
//                     console.log("Login -> pword: " + user.password)
//                     console.log(password)

//                     bcrypt.compare(password, user.password, (err, isMatch) => {
//                         if (err) throw err
//                         console.log("passport-config: isMatch -> " + isMatch)
//                         if (isMatch) {
//                             return done(null, user)
//                         } else {
//                             console.log("passport-config_error: Password incorrect")
//                             return done(null, false, {
//                                 message: 'Password incorrect'
//                             })
//                         }
//                     })
//                 })
//         })
//     )

//     passport.serializeUser(function (user, done) {
//         done(null, user.id)
//     })

//     passport.deserializeUser(function (id, done) {
//         User.findById(id, function (err, user) {
//             done(err, user)
//         })
//     })
// }