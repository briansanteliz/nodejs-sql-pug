const { Router } = require("express");
const routes = Router();

//Controladores
const nosotrosController = require("../../controllers/nosotrosController");
const homeController = require("../../controllers/homeController");
const viajesController = require("../../controllers/viajesController");
const testimoniosController = require("../../controllers/testimoniosController");

routes.get("/", homeController.home);
routes.get("/nosotros", nosotrosController);
routes.get("/viajes", viajesController.viajes);
routes.get("/viajes/:id", viajesController.viajeUnico);
routes.get("/testimonios", testimoniosController.testimonioGet);
routes.post("/api/testimonios", testimoniosController.testimonioPost);

module.exports = routes;
