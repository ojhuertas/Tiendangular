import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { CatalogoComponent } from './components/productos/catalogo/catalogo.component';
import { CarritoComponent } from './components/productos/carrito/carrito.component';
import { DetalleComponent } from './components/productos/catalogo/detalle/detalle.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'productos', component:  ProductosComponent},
  { path: 'productos/carrito', component: ProductosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    LoginComponent,
    NavComponent,
    CatalogoComponent,
    CarritoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }