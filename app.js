const express = require("express")

// importando minha rotas dentro do src
const checklist = require("./src/routes/check-list")
const checklistRouters = require("./src/routes/check-list")

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

// Usando um arquivo de rota como se fosse um middleware

    app.use(checklistRouters)



// chamando o middleware que criei

app.use(log)


// trazendo variavel de configuracao do mongoose tudo que estiver dentro desse require vai rodar o que esta dentro do database.jss

require("./config/database")