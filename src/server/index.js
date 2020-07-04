const express = require('express');
const path = require('path')
const routes = require('./routes')
const app = express()

//settings  
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.static(path.join(__dirname, "../public")));

//Muestra el año actual middleware
app.use((req,res, next)=>{
    const fecha = new Date()
    res.locals.fecha = fecha.getFullYear()
    next()
})

app.listen(4000)
app.use(routes)
