// index === Listagem completa
//show === Listagem única
//store === Criar sessao,
//update === Alterar sessao,
//destroy === Remover alterar uma sessao
const User = require('../models/User'); // Importa o model User
module.exports = {
  async store(req, res){ //Função assincrona que cria uma sessao de login
    const { email } = req.body; //Pega o email do usuarioo do corpo da requisicao

    let user = await User.findOne({ email }); //Busca usuario por id

    if (!user){ //Se o usuario não for encontrado ele criará um novo

      user = await User.create({ email }); //Cria o usuario com o email
    }
    return res.json(user); //Retorna o usuario em formato de JSON
  }  
};
