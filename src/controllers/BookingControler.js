const Booking= require('../models/Booking');//Importa o model booking
module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;// Busca o id do usuário pelo id que vem do header
    const { spot_id } = req.params; //Busca o id pelos paramentros que vem da rota
    const { date } = req.body;// Pega a data que vem do body

    const booking = await Booking.create({//Cria a reserva do espaço
      user: user_id,//Armazena o usuário atraves do id
      spot: spot_id,//Armazena o spot
      date,//Armazena a data
    });
    
    await booking.populate('spot').populate('user').execPopulate();//popula os dados de SPOT e de USER e executa o prenchimento dessas informações

    return res.json(booking);//retorna a reserva criada
  }
};