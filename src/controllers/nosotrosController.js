 const nosotrosController = (req, res) => {
    res.render("nosotros", {
      pagina: "Sobre Nosotros", //propiedades a la vista
    });
  }

module.exports = nosotrosController