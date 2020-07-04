const {Router} = require('express')

const routes = Router();

routes.get('/', (req,res)=>{
    res.render('index')
})

routes.get('/nosotros', (req,res)=>{
    res.render('nosotros', {
        pagina: 'Sobre Nosotros' //propiedades a la vista
    })
})

module.exports = routes