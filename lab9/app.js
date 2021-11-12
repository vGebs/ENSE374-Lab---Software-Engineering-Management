const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require('passport-local-mongoose')
require("dotenv").config()

const app = express()
const port = 3000

require('./config/app')(app, express, session, passport)
require('./config/mongoose')(mongoose)
require('./config/passport')(passport)

const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')
const altRoutes = require('./routes/altRoutes')
// ====================================================>
// ====================================================>
// ====================================================>

app.use(authRoutes)
app.use(todoRoutes)
app.use(altRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})