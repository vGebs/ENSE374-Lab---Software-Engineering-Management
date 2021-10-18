//imports
const authService = require('./services/authService')
const express = require("express")
const app = express()
const port = 3000

//serve static files
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}));


// MARK: - GET ===========================================================================================>

//Send login/signup
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//Send todo
app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/views/todo.html")
})

//Form files not recognized
app.get('*', (req, res) => {
    res.send("Error 404: Page not found")
})


// MARK: - POST ===========================================================================================>

//login form
app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("Form must not be empty")
    } else {
        if (authService.validateLogin(req.body.email, req.body.password)) {
            res.redirect('/todo')
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
            res.redirect('/todo')
        } else {
            res.redirect('/')
        }
    }
})


// MARK: - Port Listener ================================================================================>

//Set up sever
app.listen(port, () => console.log('Server is listening at port: ' + port))