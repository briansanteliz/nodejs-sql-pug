const Viaje = require("../models/Viajes");

//muestra todos los viajes
exports.viajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    res.render("viajes", {
      pagina: "Próximos Viajes",
      viajes,
    });
  } catch {
    throw new Error("ha ocurrido un error");
  }
};

//viaje Unico
exports.viajeUnico = async (req, res) => {
  try {
    const { id } = req.params;
    const viaje = await Viaje.findOne({ where: { id } });
    res.render("viaje-unico", {
      viaje,
    });
  } catch {
    throw new Error("ha ocurrido un error");
  }
};
