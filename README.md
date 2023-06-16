# Node JS curso com express

### Express framework para server em node

Ele eh um framework minimalista sem padroes de desenvolvimento, opera atraves de middlewares, segue um padrao chamado Chain of responsibiliyt, ele se preocupra em entregar apenas a requisicao e as respostas, deixando todo o fluxo de dados por conta do desenvolvedor.

### Comecando o projeto

Primeiro vamos iniciar com 

        npm init

Agora instale o express com

        npm install express --save

### Criando uma rota com express

- criando rota 

        const app = express()

- criei uma rota para / e uma resposta devolvendo esse html do h1

        app.get("/", (req, res) => {
        res.send("<h1>Minha lista de tarefas</h1>")
        })

### Instalando o nodemon

Ele serve para quando algum arquivo for alterado ele atualiza o servidor junto, similiar ao liveserver do vscode.

Vamos usar --save-dev como parametro para essa dependencia ficar disponivel somente no ambiente de desenvolvimento ja que isso eh provisorio

        npm install nodemon --save-dev

Agora basta iniciar seu server com o nodemon

        npx nodemon

Abra seu browser em localhost:3000 e veja o html criado funcionando, agora sempre que houver erros ou alteracoes nos arquivos do javascript no terminal voce tera avisos e respostas.

### Devolvendo javascript em Json no express

Criamos uma rota primeiro que nada mais eh uma URL no caso localhost:3000/json

- rota para json

        app.get("/json", (req, res) => {
        res.json({tittle: "Tarefa 1", done: true})
        })

agora va na sua localhost:3000/json para ver o resultado que deve ser como o abaixo

        {"tittle":"Tarefa 1","done":true} 

### Trabalhando com o Postman

Ferramenta que ajuda a fazer chamadas na web, ele ajuda a ver os resultados das chamadas do endpoints.

Ele tambem ajuda a criar documentacoes para API's

#### Usando o Postman

Lembre-se de inicializar o servidor caso rode em localhost

- Crie uma collection com o nome da sua aplicacao
- Dentro da collection crie um ADD-REQUEST e coloque o endereco que voce quer testar

### Middlewares

Trabalhando com Middlewares dentro do express com o nomeDaRota.use(express.nomeMidleware), veja exemplo abaixo

        app.use(express.json())

Esse middleware verifica se quando fizemos uma chamada web existe um Json e deixar disponivel dentro do rec do body da requisicao.

### Criando seus Middlewares

Vamos chamar a funcao da rota com o expresso

        app.use(express.json())

Vamos criar uma funcao chamada log, ela recebe 3 parametros req, res, next esse por ultimo eh necessario.

        const log = (req, res, next) => {
        console.log(req.body)
        console.log("Hoje eh dia", Date.now())
        next()
        }

- console.log(req.body) = faz uma requisicao para o body do html
- console.log("Hoje eh dia", Date.now()) = mostra no terminal a data de hoej
- next() = necessario para rodar como uma funcao de end point

### Concentrando rotas

Tudo que fazemos no back end gira em torno de requisicoes atraves de rotas

Vamos criar uma pasta chamada src e dentro uma pasta routes e crie a funcao e depois export ela conforme abaixo

        const express = require("express")

- Criando uma const e usando uma ferramenta Router do proprio express

        const routers = express.Router()

        routers.get("/checklist", (req, res) => {
        console.log("ola estou dentro de router.js")
        res.send()
        })

- O nome da url ou rota sera o localhost:3000/chechecklist, de um send no Postman para testar

- exportando a rota

        module.exports = routers

> Chame a rota no app.js

### Rota com Post

Tem o objetivo de receber requisicoes serve para criar coisas no banco de dados por exemplo.

Para criar uma rota do tipo Post basta trocar .get por .post

        routers.post("/checklist", (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
        })

- No codigo acima temos que quando receber o post ele vai retornar exatamente o que o usuario mandou no body.

Use o Postman e envie o Json para ver ele retornando, em BODY > RAW troque para Json o formato e envie a requisicao abaixo

        {
        "tarefa": {
                "nome": "Estudar Javascript",
                "status": "Em andamento",
                "done": false
        }
        }

Teste tambem com o Put que serve para atualizar e Delete esta claro sua funcao.


# Banco de dados MongoDB

Entre no site oficial e instale o mongodb na sua maquina.
Agora vamos instalar o Mongo na sua aplicacao com npm install mongo --save, aprenda alguns comando que sao importantes

- show dbs : Mostra o nome dos bancos e o tamanho
-  use nomeBanco : Troca para o nome do banco que voce digitou, caso nao exista quando voce criar a primeira collection ele ja cria o banco
- db.createCollection('nomeDaCollection") = cria uma collection dentro do banco
- show collections : mostra uma colecao ( como se fosse uma tabela em bancos relacionais)
- db.nomeCollection.insert({posso passar um Json para salvar no banco})
- db.nomeCollection.save({serve tambem para inserir os dados no banco})
- db.nomeCollection.update({Serve para atualizar os dados do banco})
- db.nomeCollection.find() : Mostra os dados dentro de uma collection, se passar algum parametro busca somente por eles

> Exemplo de um uso

Inicie o terminal e digite os comandos abaixo

        mongo - vai abrir o shell do mongo
        use todoList
        db.createCollection("tarefas")
        db.tarefas.insert({name: "Primeiro checklist", tasks" [{name: "tarefa 1"}, {name: "tarefa 2"}, {name: "tarefa 3"}]})

> Exemplo de um comando update, trocando nome de uma collection

         db.tarefas.update({name: "Primeiro checklist"}, {name: "Checklist"})

### Relacioando documentos

Vamos criar outra collection e relaciona-la com a primeira

        use todoList2
        db.createCollection("tempo")

Insira um elemento no db todoList na collection tarefas chamado atividades da manha

        db.todoList.insert({name: "Atividades da manha"})

Insira o tempo agora no todoList2

        db.todoList2.insert({name: "preparar o cafe", done: false})


# Mongoose

Ele trabalha como um adaptador (software entre o mongo e o node) ele conecta nosso Node > Express > MongoDb

Instale o Mongoose com npm install mongoose --save na sua aplicacao

### Organizando projeto

Crie uma pasta chamada config na raiz do seu projeto e crie um arquivo chamada database.js onde vamos organizar todas as configuracoes do projeto

        const meuMongoose = require("mongoose")
        // configurando o montoose para usar a promisse global do node
        meuMongoose.Promise = global.Promise

        // conectando banco de dados com nossa aplicacao


        meuMongoose.connect("mongodb://localhost/todo-list", { useUnifiedTopology: true})
        .then(() => console.log("banco conectado ao mongoose"))
        .catch((err) => console.error(err))