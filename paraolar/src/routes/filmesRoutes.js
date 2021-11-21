const controller = require("../controllers/filmesController")
const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/buscarid?", controller.getById)
router.post("/criar", controller.creatMovie)

router.put("/update/", controller.putByIdFilme)
router.patch("/updateTitle?", controller.patchTitleFilme)
router.patch("/update/", controller.patchUpFilme)
router.delete("/deletar/", controller.deletaFilme)
// router.get("/buscar?", controller.getByTitle)
// router.get("/filtrar?", controller.getByGenre)

module.exports = router