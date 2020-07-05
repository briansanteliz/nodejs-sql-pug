const Sequelize = require("sequelize");

//conexion de la bd
const db = require("../configs/database");

//modelo testimonial de la bd
const Testimonial = db.define("testimoniales", {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimonial;