const meuMongoose = require("mongoose")
// configurando o montoose para usar a promisse global do node
meuMongoose.Promise = global.Promise

// conectando banco de dados com nossa aplicacao


meuMongoose.connect("mongodb://localhost/todo-list", { useUnifiedTopology: true})
    .then(() => console.log("banco conectado ao mongoose"))
    .catch((err) => console.error(err))