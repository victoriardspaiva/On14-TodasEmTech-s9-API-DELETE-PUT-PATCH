const MovieSchema = require("../models/moviesSchemas")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const movie = await MovieSchema.find()
        res.status(200).json(movie)
    } catch (e) {
        res.status(500).json({ mensagem: e.message })
    }
}

const creatMovie = async (req, res) => {
    try {
        let newMovie = new MovieSchema({
            Title: req.body.Title,
            Year: req.body.Year,
            Rated: req.body.Rated,
            Released: req.body.Released,
            Runtime: req.body.Runtime,
            Genre: req.body.Genre,
            Director: req.body.Director,
            Writer: req.body.Writer,
            Actors: req.body.Actors,
            Plot: req.body.Plot,
            Language: req.body.Language,
            Country: req.body.Country,
            Awards: req.body.Awards,
            _id: new mongoose.Types.ObjectId(),
        })
        console.log(newMovie);
        newMovie = await newMovie.save()
        res.status(201).send({ "Mensagem": "Filme salvo com sucesso.", newMovie })

    } catch (e) {
        res.status(500).json({ mensagem: e.message })
    }
}

const getById = async (req, res) => {
    try {
        const movieFound = await MovieSchema.findById(req.query.id)
        res.status(200).json(movieFound)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const patchUpFilme = async (req, res) => {
    try {
        let idMovie = req.query.id
        let upMovie = req.body.Title
        const findAndUp = await MovieSchema.findByIdAndUpdate({ _id: idMovie }, { Title: upMovie }, { new: true })
        res.status(200).json({
            message: "Filme atualizado com sucesso.", "Novo filme": findAndUp
        })
    } catch (e) {
        res.status(500).json({
            mensagem: e.message
        })
    }
}

const deletaFilme = async (req, res) => {
    try {
        let idReq = req.query.id
        const deleteMovie = await MovieSchema.findByIdAndDelete({ _id: idReq })
        res.status(200).json({
            messagem: "Filme deletado com sucesso.", deleteMovie
        })
    } catch (e) {
        res.status(500).json({
            messagem: e.message
        })
    }
}

module.exports = {
    getAll,
    getById,
    creatMovie,
    deletaFilme,
    patchUpFilme
}