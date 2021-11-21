const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const db = require("./database/mongoConfig")

const filmesRouters = require("./routes/filmesRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRouters)

dotenv.config()

db.connect()

module.exports = app