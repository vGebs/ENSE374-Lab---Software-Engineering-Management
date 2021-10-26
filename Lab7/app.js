const authService = require('./services/authService')
const userModel = require('./public/models/user')
const taskModel = require('./public/models/task')

const express = require("express");
const app = express();

app.use(express.static("public"));

// body-parser is now built into express!
app.use(express.urlencoded({
    extended: true
}));

//EJS
app.set("view engine", "ejs")

// a common localhost test port
const port = 3000


// MARK: - GET ==============================================================================>
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/todo", (req, res) => {
    res.sendFile(__dirname + "/views/todo.ejs")
})


// MARK: - POST ===========================================================================================>
 
//login form
app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateLogin(req.body.email, req.body.password)) {
            res.render("todo", {
                username: `${req.body.email}`,
                tasks:  `${taskModel.tasks}`
            })
        } else {
            res.redirect('/')
        }
    }
})

//signup form
app.post('/signup', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.auth) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateSignup(req.body.email, req.body.password, req.body.auth)) {
            res.render("todo", {
                username: `${req.body.email}`
            })
        } else {
            res.redirect('/')
        }
    }
})


// MARK: - Port Listener ================================================================================>

// Simple server operation
app.listen(port, () => {
    // template literal
    console.log(`Server is running on http://localhost:${port}`)
})