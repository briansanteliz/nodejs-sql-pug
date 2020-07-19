const Viaje = require("../models/Viajes");
const Testimonios = require("../models/Testimoniales");

exports.home = async (req, res) => {
  try {
    const viajes = await Viaje.findAll({
      limit: 3,
    });
    const resp = await Testimonios.findAll({
      limit: 3,
    });
    res.render("index", {
      pagina: "La mejor Agencia Para ti",
      viajes,
      home: "home",
      resp,
    });
  } catch {
    throw new Error("ha ocurrido un error");
  }
};
