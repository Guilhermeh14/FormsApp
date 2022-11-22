import { Usuario } from './../models/Usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin = this.formBuilder.group({
    email:['', Validators.compose([Validators.required, Validators.email])],
    senha:['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  mensagensErro = {
    email:[
        {tipo: 'required', aviso: 'Campo Obrigatório!' }, 
        {tipo: 'email', aviso: 'Digite um E-mail válido'}
      ],
      Senha:[
        {tipo: 'required', aviso: 'Digite uma Senha' }, 
        {tipo: 'minlength', aviso: 'Minimo de 8 caracteres'}
      ],
  };

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private route: Router) { }

  get email(){
    return this.formLogin.get('email');
  }

  get senha(){
    return this.formLogin.get('senha');
  }

  ngOnInit() {}

  async login(){
    if(this.formLogin.valid){
      const email = this.formLogin.get('email').value;
      const senha = this.formLogin.get('senha').value;
      const usuario: Usuario = await this.usuariosService.login(email, senha) as null as Usuario;
      if(usuario){
        this.route.navigateByUrl('/tabs/tab1');
      }else{
        alert('E-mail ou Senha Inválidos!');
      }
    }else{
      alert('Formulario Inválido');
    }
  }

}
