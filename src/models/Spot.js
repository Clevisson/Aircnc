const mongoose = require('mongoose'); // importando o mongo

const UserSchema = new mongoose.Schema({   //Definição do banco de dados
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', UserSchema);
