const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: Number,
    uName: String,
    pword: String
}); //Chnage to username and password fro passport

const User = mongoose.model("User", userSchema);

module.exports = User;