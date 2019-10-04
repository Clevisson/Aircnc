const mongoose = require('mongoose'); // importando o mongo

const UserSchema = new mongoose.Schema({   //Definição do banco de dados
  email:String,
});

module.exports = mongoose.model('User', UserSchema);
