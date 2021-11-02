const mongoose = require("mongoose");

// create a mongoose schema for a game
const gameSchema = new mongoose.Schema ({
    userName:   String,
    gameName:   String,
    score:      Number,
    reviewText: String
});

const Game = mongoose.model ( "Game", gameSchema );

module.exports = Game;