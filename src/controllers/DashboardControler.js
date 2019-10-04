const Spot = require("../models/Spot"); //Importa o Spot

module.exports = {  //Função que lista os spots criados por determinado usuario
 async show(req, res){
    const { user_id } = req.headers; //Busca o id do usuario logado

    const spots = await Spot.find({ user: user_id });//Busca todos os spots do id do usuário

    return res.json(spots); //Retorna os spots

  }
}