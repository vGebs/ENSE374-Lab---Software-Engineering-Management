const authService = require('./services/authService')
const userModel = require('./public/models/user')
const mongoose = require("mongoose");
const Task = require('./public/models/task')

const express = require("express");
const app = express();

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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


// MARK: - POST - Login/Signup======================================================================================>

//login form
app.post('/login', async (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateLogin(req.body.email, req.body.password)) {
            //taskModel.generateTasks();
            try {
                const tasks = await Task.find();
                console.log(tasks);
                res.render("todo", {
                    username: req.body.email,
                    tasks: tasks
                })
            } catch (err) {
                console.log(error);
            }

        } else {
            res.redirect('/')
        }
    }
})

//signup form
app.post('/signup', async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.auth) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateSignup(req.body.email, req.body.password, req.body.auth)) {
            //taskModel.generateTasks();

            try {
                const tasks = await Task.find();
                console.log(tasks);
                res.render("todo", {
                    username: req.body.email,
                    tasks: tasks
                })
            } catch (err) {
                console.log(error);
            }
        } else {
            res.redirect('/')
        }
    }
})


// MARK: - POST - Login/Signup======================================================================================>

app.post('/logout', (req, res) => {
    res.redirect('/')
})

app.post('/addTask', (req, res) => {
    console.log(req.body.taskText)

    let task = {
        text: req.body.taskText,
        state: "",
        creator: userModel.users[0],
        isTaskClaimed: false,
        claimingUser: "",
        isTaskDone: false,
        isTaskCleared: false
    }

    let oldTasks = jsonFuncs.loadTasksFromJson()

    oldTasks.push(task)

    jsonFuncs.saveTasksToJson(oldTasks)

    let tasks = jsonFuncs.loadTasksFromJson()

    res.render("todo", {
        username: req.body.email,
        tasks: tasks
    })
})

app.post('/claimTask/:taskID', (req, res) => {
    console.log(req.params.taskID)

    res.render("todo", {
        username: req.body.email,
        tasks: taskModel.tasks
    })
})

app.post('/abandon', (req, res) => {

})

app.post('/complete', (req, res) => {

})

app.post('/unFinish', (req, res) => {

})

app.post('/purge', (req, res) => {

})


// MARK: - Port Listener ================================================================================>

// Simple server operation
app.listen(port, () => {
    // template literal
    console.log(`Server is running on http://localhost:${port}`)
})