const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    Title: {
        type: String,
        require: true
    },
    Year: {
        type: String,
        require: true
    },
    Rated: {
        type: String,
        require: true
    },
    Released: {
        type: String,
        require: true
    },
    Runtime: {
        type: String,
        require: true
    },
    Genre: {
        type: String,
        require: true
    },
    Director: {
        type: String,
        require: true
    },
    Writer: {
        type: String,
        require: true
    },
    Actors: {
        type: String,
        require: true
    },
    Plot: {
        type: String,
        require: true
    },
    Language: {
        type: String,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    Awards: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("movie", movieSchema)