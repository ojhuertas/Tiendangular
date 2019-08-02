const Producto = require('../models/productos');

const productoController = {}

productoController.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

productoController.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoController.createProductos = async (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        img: req.body.img
    });
    await producto.save();
    console.log(producto);
    res.json({
        'status': 'Producto Guardado'
    });
}

productoController.editProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        img: req.body.img
    };
    await Producto.findByIdAndUpdate(id, {$set: producto},{new:true})
    res.json({
        status: 'Producto Editado'
    })
}

productoController.deleteProducto = async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Producto Eliminado'
    })
}

module.exports = productoController;
