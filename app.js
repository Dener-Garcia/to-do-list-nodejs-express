const express = require("express")

// criando rota 

const app = express()

// porta a ser escutada no localhost

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
})

// middlewares 

app.use(express.json())

// criando um middlware

const log = (req, res, next) => {
    console.log(req.body)
    console.log("Hoje eh dia", Date.now())
    next()
}

// criei uma rota para / e uma resposta devolvendo esse html do h1

app.get("/", (req, res) => {
    res.send("<h1>Minha lista de tarefa</h1>")
})
 
// rota para json

app.get("/json", (req, res) => {

    console.log(req.body)

    res.json(
    {
        tittle: "Tarefa 1", 
        done: true
    }
    )
})

// chamando o middleware que criei

app.use(log)

