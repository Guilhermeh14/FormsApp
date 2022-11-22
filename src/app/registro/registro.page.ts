import { UsuariosService } from './../services/usuarios.service';
import { Usuario } from './../models/Usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  Usuario: Usuario = new Usuario();


  formRegistro = this.formBuilder.group({

    nome:['', Validators.compose([Validators.required, Validators.minLength(3)])],

    email:['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6)])],

    cpf:['', Validators.compose([Validators.required, Validators.minLength(11),  Validators.maxLength(11)])],

    senha:['', Validators.compose([Validators.required, Validators.minLength(8)])],

    confirmaSenha:['', Validators.compose([Validators.required, Validators.minLength(8)])]
  });

  mensagensErro = {
    nome:[
      {tipo: 'required', aviso: 'Campo Obrigatório!'},
      {tipo: 'minlength', aviso: 'Digite o Nome'}
    ],
    email:[
      {tipo: 'required', aviso: 'Campo Obrigatório!'},
      {tipo: 'email', aviso: 'Digite um E-mail válido'},
      {tipo: 'minlength', aviso: 'Minimo 6 caracteres'}
    ],
    cpf:[
      {tipo: 'required', aviso: 'Campo Obrigatório!'},
      {tipo: 'minlength', aviso: 'Minimo 11 numeros'},
      {tipo: 'maxlength', aviso:'Maximo 11 numeros'}
    ],
    senha:[
      {tipo: 'required', aviso: 'Digite uma Senha'},
      {tipo: 'minlength', aviso: 'Minimo 8 caracteres'}
    ],
    confirmaSenha:[
      {tipo: 'required', aviso: 'Confirme a Senha'},
      {tipo: 'minlength', aviso: 'Minimo 8 caracteres'}
    ],
  };

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private route: Router) {}

  get nome(){
    return this.formRegistro.get('nome');
  }

  get email(){
    return this.formRegistro.get('email');
  }

  get cpf(){
    return this.formRegistro.get('cpf');
  }

  get senha(){
    return this.formRegistro.get('senha');
  }

  get confirmaSenha(){
    return this.formRegistro.get('confirmaSenha');
  }
  


  ngOnInit() {}

  async salvar(){
    if(this.formRegistro.valid) {
      this.Usuario.nome = this.formRegistro.get('nome').value;
      this.Usuario.email = this.formRegistro.get('email').value;
      this.Usuario.cpf = this.formRegistro.get('cpf').value;
      this.Usuario.senha = this.formRegistro.get('senha').value;

      const id = (await this.usuariosService.buscarId()) as number;
      this.Usuario.id = id;

      this.usuariosService.salvar(this.Usuario);

      alert('Sucesso!!!');

      this.usuariosService.salvarId(id + 1);

      this.route.navigateByUrl('/login')
    }else {
      alert('Formulario Inválido')
    }
  }

}
