const Usuario = require('../models/usuarios');

const usuarioController = {}

usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioController.getUsuario = async (req, res) => {
    const usuario = await Usuario.findOne({'email':req.params.email});
    res.json(usuario);
}

usuarioController.createUsuarios = async (req, res) => {
    const usuario = new Usuario({
        email: req.body.email,
        password: req.body.password
    });
    await usuario.save();
    console.log(usuario);
    res.json({
        'status': 'Usuario Guardado'
    });
}

usuarioController.editUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        email: req.body.email,
        password: req.body.password
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario},{new:true})
    res.json({
        status: 'Usuario Editado'
    })
}

usuarioController.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Usuario Eliminado'
    })
}

module.exports = usuarioController;
