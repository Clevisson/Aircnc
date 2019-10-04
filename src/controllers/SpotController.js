const User = require("../models/User"); //Importa o User
const Spot = require("../models/Spot");//Importa o Spot

module.exports = {
  async index(req, res){//Função de listagem da tecnologia especifica
    const { tech } = req.query; //Buca a tecnologia cadastrada

    const spots = await Spot.find({ techs: tech })//Lista os spots da tecnologia passada 

    return res.json(spots);//retorna os spots da tecnologia
  },

  async store(req, res) {  //Função para criação de um novo spot no banco
    const { filename } = req.file; //Importa o nome do arquivo
    const { company, techs, price } = req.body;//Importa as informações que compõem o spot
    const { user_id } = req.headers;//Pega o id do usario que é enviado no header

    const user = await User.findById(user_id); //Valida a existencia do usuário
    if (!user){
      return res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({//Cria o spot na base de dados
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),//Transforma a string em um array cortando a string em várias partes com vírgula
      //usando o método SPLIT e percorrendo o array com o metodo MAP e excluindo os espaços em branco antes e depois da string com o método TRIM
      price
    })
    return res.json(spot) //Retorna o spot criado
  }
};