const mongoose = require('mongoose'); //Importa o mongo

const BookingSchema = new mongoose.Schema({//Cria a reserva do Spot no banco de dados
  date: String,
  approved: Boolean,
  user:{ //Relacionamento com o usuário , onde é definido qual usuario solicitou a reserva
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {//Relacionamento com o spot, onde pe defino qual o spot que o usuário está querendo criar a reserva
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});
module.exports = mongoose.model('Booking', BookingSchema);// Exporta o model Booking