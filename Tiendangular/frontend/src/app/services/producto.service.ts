import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  selectedProducto: Producto;
  producto: Producto;
  productos: Producto[];

  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { 
    this.selectedProducto = new Producto();
  }

  getProductos(){
    return this.http.get(this.URL_API);
  }

  getProducto(producto: Producto){
    return this.http.get(this.URL_API + `/${producto._id}`);
  }

  postProducto(producto: Producto){
    return this.http.post(this.URL_API, producto);
  }

  putProductos(producto: Producto){
    return this.http.put(this.URL_API + `/${producto._id}`, producto);
  }

  deleteProductos(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
