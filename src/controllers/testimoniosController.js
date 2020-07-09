const Testimonios = require("../models/Testimoniales");

exports.testimonioGet = async(req, res) => {
   
    const resp =  await Testimonios.findAll();
     res.render("testimonios", {
      pagina: "Testimoniales", //propiedades a la vista
      resp,
    });
  }

exports.testimonioPost = async(req, res) => {
    const {nombre, correo, mensaje} = req.body;
    let error = [];
    //valida los campos
     if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === ''){
       //agrega un mensaje en caso hay error al arreglo
        error.push({mensaje: 'Todos los campos son obligatorios'})
     }
     if(error.length > 0){
       //muestra un error en la vista y los inputs mantiene los values anteriores
       res.render('testimonios',{
         error,
         name:nombre,
         correo,
         mensaje,
        
       })
       return 
     }
     else{
       //almacena en la bd
       await Testimonios.create({
         nombre,
         correo,
         mensaje
       })
        res.redirect('/testimonios')
     }
   }