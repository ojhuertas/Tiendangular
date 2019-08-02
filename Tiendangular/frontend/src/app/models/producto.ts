export class Producto {

    constructor(
        _id = ' ',
        nombre = ' ',
        cantidad = 0,
        precio = 0,
        img = ' '
    ){
        this._id = _id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.img = img;
    }

    _id: string;
    nombre: string;
    cantidad: number;
    precio: number;
    img: string;
}