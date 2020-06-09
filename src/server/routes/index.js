const {Router} = require('express')

const routes = Router();

routes.get('/', (req,res)=>{
    res.render('index')
})

routes.get('/nosotros', (req,res)=>{
    res.render('nosotros')
})

module.exports = routes