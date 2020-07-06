const { Router } = require("express");
const Viaje = require("../../models/Viajes");
const Testimonios = require("../../models/Testimoniales");
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
routes.get("/testimonios", (req, res) => {
  res.render("testimonios", {
    pagina: "Testimoniales", //propiedades a la vista
  });
});

//se ejecuta cuando se envia el formulario
routes.post("/testimonios", async(req, res) => {
 const {nombre, correo, mensaje} = req.body;
 let error = [];
 let success = [];
 //valida los campos
  if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === ''){
    //agrega un mensaje en caso hay error al arreglo 
    error.push({mensaje: 'Todos los campos son obligatorios'})
  }else{
    success.push({mensaje:'Gracias por tu mensaje!'})

  }
  //revisa el arreglo error
  if(error.length > 0){
    //muestra un error en la vista y los inputs mantiene los values anteriores
    res.render('testimonios',{
      success,
      error,
      name:nombre,
      correo,
      mensaje,
    pagina: "Testimoniales"
    })
  }else{
    //almacena en la bd
    await Testimonios.create({
      nombre,
      correo,
      mensaje
    })
     res.render('testimonios',{
    success

     })
  }
}); 

module.exports = routes;
