import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from "../../../services/producto.service";
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [ProductoService]
})
export class CarritoComponent implements OnInit {

  @Output() cerrarC = new EventEmitter();

  carritoLista: any;
  productos: Producto[];
  producto: Producto;
  p: Producto;
  itemCantidadA: number = 0;
  itemCantidadB: number = 0;
  itemCantidadTotal: number = 0;
  c: number;
  pds: Producto[];

  @Input('carritoLista') carritoItems: any;

  constructor(private productoService: ProductoService, private catalogoComponent: CatalogoComponent, private router: Router){

  }

  ngOnInit() {
    $('.graciasCarrito').hide();
  }

  getProductos(){
    this.productoService.getProductos()
      .subscribe(res =>{
        this.productoService.productos = res as Producto[];
      })
  }

  checkOut(pts: Producto[]){
    var r = this.catalogoComponent;
    for(var i = 0; i < pts.length || function(){
        r.checkOut();      
      }(); i++){
      console.log(i);
      this.selectItem(pts[i],pts[i].cantidad);
    }
  }

  selectItem(producto: Producto,cantidad: number){
    this.productoService.getProducto(producto)
      .subscribe(res =>{
        this.productoService.producto = res as Producto;
        this.itemCantidadA = this.productoService.producto.cantidad;
        this.itemCantidadTotal =  this.itemCantidadA - cantidad;
        this.p = {
          _id: this.productoService.producto._id,
          nombre: this.productoService.producto.nombre,
          cantidad: this.itemCantidadTotal,
          precio: this.productoService.producto.precio,
          img: this.productoService.producto.img
        }
        this.editarItem(this.p);
      })
  }

  editarItem(producto: Producto){
    var r = this.catalogoComponent;
    this.productoService.putProductos(producto)
      .subscribe(res =>{
        this.productoService.producto = res as Producto;
      })
    this.productoService.getProductos()
      .subscribe(res =>{
        this.productoService.productos = res as Producto[];
        r.checkOutEnd(this.productoService.productos);
        //console.log(this.productoService.productos);
      })
    
  }

  cerrarCarrito(){
    $('.catalogo').show();
    $('.carrito').hide();
    $('.fas').css({
      color: '#fff'
    })
    $('.fa-th').css({
      color: 'orange'
    })
  }

  seguirComprando(){
    $('.catalogo').show();
    $('.carrito').hide();
    $('.fas').css({
      color: '#fff'
    })
    $('.fa-th').css({
      color: 'orange'
    })
  }

}