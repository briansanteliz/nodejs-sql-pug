const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
const configs = require("../configs");
const db = require('../configs/database')
const app = express();

//settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.port || 4000);

//middlewares
app.use(express.static(path.join(__dirname, "../public")));
app.use(morgan("dev"));

//Configura el nombre del sitio basando en el entorno
const settings = configs[app.get("env")];
app.locals.nombre = settings.nombre;

//Muestra el año actual middleware
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fecha = fecha.getFullYear();
  next();
});

app.listen(app.get("port"), () => {
  console.log(`Server en el puerto ${app.get("port")}`);
});
db.authenticate()
    .then(()=>console.log('DB Connectada'))
    .catch(e=>console.log(e))
app.use(routes);
