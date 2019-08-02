import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';

declare var jQuery:any;
declare var $:any;
declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    $('.loginConten').css({
      minHeight: $(window).height()
    })
  }

  getUsuarios(){
    this.usuarioService.getUsuarios()
      .subscribe(res =>{
        this.usuarioService.usuarios = res as Usuario[];
      })
  }

  validarUsuario(form: NgForm){
    this.usuarioService.getUsuario(form.value.email)
      .subscribe(res =>{
        this.usuarioService.usuario = res as Usuario;
        if(res === null){
          M.toast({ html: 'Verifique sus datos' });
        }else{
          if(form.value.email === res['email'] && form.value.password === res['password']){
            window.location.href = '/productos';
          }else{
            M.toast({ html: 'Sus credenciales no son correctas' }); 
          }
        }
      })
  }
}