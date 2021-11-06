const express = require("express")
const app = express();

const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({
    extended: true
}))

// ====================================================>
// ====================================================>
// ====================================================>

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use(authRoutes)
app.use(todoRoutes)

app.get('*', (req, res) => {
    res.send("Error 404: Page not found")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})