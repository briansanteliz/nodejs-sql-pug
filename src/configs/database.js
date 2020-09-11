//Archivo de conexión de sequelize
const Sequelize = require('sequelize')
//lee variables de entorno
const dotenv = require('dotenv')
dotenv.config({path:'entorno.env'})

module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USUARIO, process.env.BD_PASS, {
    host: process.env.HOST,
    dialect:'mysql',
    port:process.env.BD_PORT,
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})
