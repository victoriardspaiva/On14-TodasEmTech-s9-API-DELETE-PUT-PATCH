const controller = require("../controllers/filmesController")
const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/buscarid?", controller.getById)
router.post("/criar", controller.creatMovie)
router.patch("/update/", controller.patchUpFilme)
router.delete("/deletar/", controller.deletaFilme)

module.exports = router