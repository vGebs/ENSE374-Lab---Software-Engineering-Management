const mongoose = require("mongoose")

module.exports = function (mongoose) {
    mongoose.connect("mongodb://localhost:27017/TaskApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}