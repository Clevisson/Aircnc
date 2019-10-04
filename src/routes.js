const express = require("express"); //Importa o express
const multer = require("multer"); //Importa o multer
const uploadConfig = require("./config/Upload"); //Importa a configuração de upload

const SessionController = require("./controllers/SessionController");//Importa o controler da sessao
const Spotcontroller = require("./controllers/SpotController"); //Importa o controler de spot
const DashboardController = require("./controllers/DashboardControler");//Importa o controler Dashboard
const BookingController = require("./controllers/BookingControler");

const routes = express.Router(); 
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);//Rota para sessao

routes.get('/spots', Spotcontroller.index);//Rota listagem Spots
routes.post('/spots', upload.single('thumbnail'), Spotcontroller.store);//Rota para o spot

routes.get('/dashboard', DashboardController.show);//Rota para listagem do dashboard

routes.post('/spots/:spot_id/bookings', BookingController.store);//Rota para criação da reserva do spot com 

module.exports = routes;

