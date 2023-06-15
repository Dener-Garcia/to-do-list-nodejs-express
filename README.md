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

Criamos uma rota primeiro que nada mais eh uma URL

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


