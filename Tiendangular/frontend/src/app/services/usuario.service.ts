import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario: Usuario;
  usuarios: Usuario[];
  usuario: Usuario;

  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { 
    this.selectedUsuario = new Usuario();
  }

  getUsuarios(){
    return this.http.get(this.URL_API)
  }

  getUsuario(email){
    return this.http.get(this.URL_API + '/'+ email)
  }
}