const mongoose = require("mongoose")
const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')
const express = require("express")
const router = express.Router()
const app = express();

app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body-parser is now built into express!
app.use(express.urlencoded({
    extended: true
}))

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

// MARK: - ROUTE - Login/Signup========================================================================>
app.use(authRoutes)

// MARK: - ROUTE - Todo ===============================================================================>
app.use(todoRoutes)

// MARK: - Port Listener ==============================================================================>
app.listen(port, () => {
    // template literal
    console.log(`Server is running on http://localhost:${port}`)
})