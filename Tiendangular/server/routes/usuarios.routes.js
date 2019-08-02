const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

//Obtener todos los datos
router.get('/', usuarioController.getUsuarios);

//Crear datos
router.post('/', usuarioController.createUsuarios);

//Obtener us solo dato
router.get('/:email', usuarioController.getUsuario);

//Actualizar dato
router.put('/:id', usuarioController.editUsuario);

//Eliminar dato
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
