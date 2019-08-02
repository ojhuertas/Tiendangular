import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from "../../services/producto.service";
import { Producto } from 'src/app/models/producto';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  carrito: any;
  @Input('carrito') carritoUser:any;

  constructor(private productoService: ProductoService) { 
    
  }

  ngOnInit() {
    $('.carrito .backProductos').hide();
  }

  mostrarCarrito(productos: Producto[]){
    $('.fas').css({
      color: '#fff'
    })
    $('.fa-shopping-cart').css({
      color: 'orange'
    })
    $('.catalogo').hide();
    $('.carrito').show();
    $('.graciasCarrito').hide();
    $('.carrito .item').show();
    //console.log(productos);
  }

  mostrarProductos(){
    $('.fas').css({
      color: '#fff'
    })
    $('.fa-th').css({
      color: 'orange'
    })
    $('.catalogo').show();
    $('.carrito').hide();
  }

}