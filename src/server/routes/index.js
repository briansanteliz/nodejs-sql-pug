const { Router } = require("express");
const Viaje = require("../../models/Viajes");
const Testimonios = require("../../models/Testimoniales");
const routes = Router();
let success= [];

routes.get("/",  async(req, res) => {
  try {
    const viajes = await Viaje.findAll({
      limit:3
    });
    res.render("index", {
      pagina: "Próximos Viajes",
      viajes,
      home:'home'
    });
  } catch {
    throw new Error("ha ocurrido un error");
  }
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
routes.get("/testimonios", async(req, res) => {
   
  const resp =  await Testimonios.findAll();
   res.render("testimonios", {
    pagina: "Testimoniales", //propiedades a la vista
    resp,
    // success
  });
});

//se ejecuta cuando se envia el formulario
routes.post("/testimonios", async(req, res) => {
 const {nombre, correo, mensaje} = req.body;
 let error = [];
 //valida los campos
  if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === ''){
    //agrega un mensaje en caso hay error al arreglo
     error.push({mensaje: 'Todos los campos son obligatorios'})
  }
  // else{
  //   success.push({mensaje:'Gracias por tu mensaje!'})

  // }
  //revisa el arreglo error
  if(error.length > 0){
    //muestra un error en la vista y los inputs mantiene los values anteriores
    res.render('testimonios',{
      error,
      name:nombre,
      correo,
      mensaje,
    // pagina: "Testimoniales"
     
    })
    return 
  }
  else{
    success.push({mensaje:'agregado'})
    //almacena en la bd
    await Testimonios.create({
      nombre,
      correo,
      mensaje
    })
     res.redirect('/testimonios')
  }
});

module.exports = routes;
