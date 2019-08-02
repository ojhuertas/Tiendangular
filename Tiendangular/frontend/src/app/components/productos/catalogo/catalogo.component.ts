import { Component, OnInit} from '@angular/core';
import { ProductoService } from "../../../services/producto.service";
import { Producto } from '../../../models/producto';
import { ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [ProductoService]
})
export class CatalogoComponent implements OnInit {

  detalleProducto = null;
  carritoCheck = new Array();
  carritoCheckOut = new Array();
  estado:boolean = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ){
    
  }

  ngOnInit() {
    $('.fas').css({
      color: '#fff'
    })
    $('.fas.fa-th').css({
      color: 'orange'
    })
    $('.catalogo').show();
    $('.carrito').hide();
    this.carritoCheckOut = [];
    
    this.getProductos();
    
  }

  checkOut(){
    this.carritoCheckOut = [];
    $('.precio').hide();
    $('.precioCheckOutTotal').html('');
    $('.graciasCarrito').show();
    $('.sinProductos').hide();
  }

  checkOutEnd(pds:Producto[]){
    this.productoService.productos = pds;
  }

  mostrarResultado(){
    console.log('Padre responde');
    this.ngOnInit()
  }

  getProductos(){
    this.productoService.getProductos()
      .subscribe(res =>{
        this.productoService.productos = res as Producto[];
      })
  }

  imgRuta(img){
    const ruta = '../../../../assets/images/'+img;
    return ruta;
  }

  mph(){
    let icon = `<i class="fas fa-search"></i>`;
    return icon;
  }

  renderFiltro(clave: string){
    let pts = new Array();
    let keyword = clave.charAt(0).toUpperCase() + clave.slice(1);
    this.productoService.getProductos()
      .subscribe(res =>{
        $.each(res, function(key, value){
          if(this.nombre.indexOf(keyword) > -1){
            pts.push(this);
          }
        })
        this.productoService.productos = pts as Producto[];
      })
  }

  onClick(producto){
    this.detalleProducto = producto;
    $('.catalogo').hide();
  } 

  cerrarDetalles(){
    this.detalleProducto = null;
    $('.catalogo').show();
  }

  agregarProducto(producto: any, unidades: number){
    //inicio del estado por accion
    this.estado = false;

    //modelo para carrito
    let p = {
      _id: producto._id,
      nombre: producto.nombre,
      cantidad: Number(unidades),
      precio: 0,
      img: producto.img
    }
    if(this.carritoCheckOut.length == 0){
      p = {
        _id: producto._id,
        nombre: producto.nombre,
        cantidad: Number(unidades),
        precio: producto.precio * Number(unidades),
        img: producto.img
      }
      this.carritoCheckOut.push(p);
    }else{
      //Recorrido del array para encontrar concidencia
      for(var i = 0; i < this.carritoCheckOut.length; i++){
        if(this.carritoCheckOut[i]._id == p._id){
          var a = this.carritoCheckOut[i].cantidad;
          var b = p.cantidad;
          this.carritoCheckOut[i].cantidad = a + b;
          this.carritoCheckOut[i].precio = this.carritoCheckOut[i].cantidad * producto.precio;
          this.estado = true;
        }
      }

      if(this.estado == false){
        p = {
          _id: producto._id,
          nombre: producto.nombre,
          cantidad: Number(unidades),
          precio: producto.precio * Number(unidades),
          img: producto.img
        }
        this.carritoCheckOut.push(p);
      }
    }
    this.mostrarCheckOutTotal(this.carritoCheckOut)
  }

  mostrarCheckOutTotal(carrito:any){
    let total:number = 0;
    for(var i = 0; i < carrito.length; i++){
      total = total + carrito[i].precio;
    }
    $('.precioCheckOutTotal').html(total);
    $('.precio').css({
      display: 'block'
    })
  }

}

