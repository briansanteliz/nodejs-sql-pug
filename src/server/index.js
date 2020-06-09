const express = require('express');
const path = require('path')
const routes = require('./routes')
const app = express()

//settings
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.static('public'))

app.listen(4000)
app.use(routes)
