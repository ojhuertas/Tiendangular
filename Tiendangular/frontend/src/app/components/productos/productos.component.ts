import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto.service";
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto';

declare var M: any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();

    $('.container').css({
      minHeight: $(window).height()
    })

    $('.fas').css({
      color: '#fff'
    })
    $('.fas.fa-th').css({
      color: 'orange'
    })
    
  }

  getProductos(){
    this.productoService.getProductos()
      .subscribe(res =>{
        this.productoService.productos = res as Producto[];
      })
  }

  addProducto(form: NgForm) {
    if (form.value._id == ' ') {
      this.productoService.postProducto(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProductos();
          M.toast({ html: 'Producto Guardado' });
        })
    }else{
      this.productoService.putProductos(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProductos();
          M.toast({ html: 'Producto Editado' });
        })
    }
  }

  editProducto(producto: Producto){
    this.productoService.selectedProducto = producto;
  }

  deleteProducto(_id: string){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.productoService.deleteProductos(_id)
      .subscribe(res => {
        M.toast({html: 'Producto Eliminado'});
        this.getProductos(); 
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }

}

