const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({

    nombre:String,
    email: String,
    telefono: String,
    idusuario:String

});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

//Ruta de prueba
router.get('/ejemplo', (req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
    
})

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });

    nuevousuario.save()
        .then(() => {
            res.send('Usuario agregado correctamente');
        })
        .catch(err => {
            res.send(err);
        });
});



