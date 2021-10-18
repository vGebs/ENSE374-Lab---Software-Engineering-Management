//imports
const express = require("express")
const app = express()

const port = 3000

//serve static files
app.use(express.static('public'))
// app.use(express.static(__dirname + 'public/css'))
// app.use(express.static(__dirname + 'public/js'))

//Send login/signup
app.get('/', (req, res) =>
    res.sendFile(__dirname + "/views/index.html")
)

//Send todo
app.get('/todo', (req, res) =>
    res.sendFile(__dirname + "/views/todo.html")
)

//Form files not recognized
app.get('*', (req, res) =>
    res.send("Error 404: Page not found")
);

//Set up sever
app.listen(port, () => console.log('Server is listening at port: ' + port))