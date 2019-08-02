const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto.controller');

//Obtener todos los datos
router.get('/', productoController.getProductos);

//Crear datos
router.post('/', productoController.createProductos);

//Obtener us solo dato
router.get('/:id', productoController.getProducto);

//Actualizar dato
router.put('/:id', productoController.editProducto);

//Eliminar dato
router.delete('/:id', productoController.deleteProducto);



module.exports = router;
