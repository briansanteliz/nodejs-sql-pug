const { Router } = require("express");
const Viaje = require("../../models/Viajes");
const routes = Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/nosotros", (req, res) => {
  res.render("nosotros", {
    pagina: "Sobre Nosotros", //propiedades a la vista
  });
});
routes.get("/viajes", async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    res.render("viajes", {
      pagina: "Próximos Viajes",
      viajes,
    });
  } catch {
    throw new Error("ha ocurrido un error");
  }
});

routes.get("/viajes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const viaje = await Viaje.findOne({ where: { id } });
    res.render("viaje-unico", {
      viaje,
    });
  } catch  {
    throw new Error("ha ocurrido un error");
  }
});

module.exports = routes;
