const express = require("express")
const mongoose = require("mongoose")

const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require('passport-local-mongoose')
require("dotenv").config()

const app = express()
const port = 3000

// const User = require("./models/user")

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs")
app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/TaskApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const User = require('./models/user')

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')

// ====================================================>
// ====================================================>
// ====================================================>

app.use(authRoutes)
app.use(todoRoutes)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('*', (req, res) => {
    res.send("Error 404: Page not found")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})