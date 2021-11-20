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

const getById = (req, res) => {
    let idReq = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idReq)
    res.status(200).send(idEncontrado)
}

const getByTitle = (req, res) => {
    let tituloReq = req.query.titulo
    let filmeEncontrado = filmesJson.filter(filme => filme.Title.includes(tituloReq))
    res.status(200).send(filmeEncontrado)
}

const getByGenre = (req, res) => {
    let generoReq = req.query.genre
    let filmeEncontrado = filmesJson.filter(filme => filme.Genre.includes(generoReq))
    res.status(200).send(filmeEncontrado)
}

const putByIdFilme = (req, res) => {
    const idReq = req.params.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeReq
            }
        ]
    )
}

const patchTitleFilme = (req, res) => {
    let idReq = req.query.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso",
                "filme": filmeReq
            }
        ]
    )
}

const deletaFilme = (req, res) => {
    const idReq = req.params.id
    const indexFilme = filmesJson.findIndex(filme => filme.id == idReq)

    filmesJson.splice(indexFilme, 1)

    res.status(200).json([
        {
            "message": "Filme deletado com sucesso",
            "filme": idReq
        }
    ])
}

//fiquei em dúvida de como iria construir patchUpSerie para diferenciar do putByIdSerie, pq teoriacamente em patch poderia mudar só uma ou algumas propriedades, mas o quem que escolhe qual mudar, eu ou o usuario? ou posso escolher arbitrariamente?? Outra questão, se é pra mudar tudo o put faz isso, se for pra mudar só uma propriedade o put where também faz. Como escolher entre os dois, patch ou put? :/  E como ficaria a lógica aqui no controller, pensando sobre acredito (e espero kk) que qd estudarmos sql vai ficar mais facil visualizar isso

const patchUpFilme = (req, res) => {
    const idReq = req.params.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                "filme": filmeReq
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    creatMovie,
    putByIdFilme,
    patchTitleFilme,
    deletaFilme,
    patchUpFilme
}