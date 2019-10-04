const express = require("express"); // importa o express
const mongoose = require("mongoose");

const routes = require("./routes") //importa as rotas

const app = express(); //inicia a aplicação com a função do express
mongoose.connect("mongodb+srv://oministack09:99044069@oministack-09-g5ram.mongodb.net/semana09?retryWrites=true&w=majority", { //inicia o banco de dados
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.use(express.json());
app.use(routes);
app.listen(3333); //inicia o servidor na porta 3333

//req.query = Acesssar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)