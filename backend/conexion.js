const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/beatBrand');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a mongo')})
objetobd.on('error', ()=>{console.log('Error  a mongo')})

module.exports = mongoose