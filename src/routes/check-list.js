const express = require("express")

// criando uma const e usando uma ferramenta Router do proprio express

const routers = express.Router()

// o nome da url ou rota sera o checklist, de um send no Postman para testar
routers.get("/checklist", (req, res) => {
    console.log("ola estou dentro de router.js")
    res.send()
})

routers.post("/checklist", (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})

// esportando a rota
module.exports = routers
