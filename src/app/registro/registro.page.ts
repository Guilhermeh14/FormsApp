import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
      {tipo: 'minlength', aviso: 'Minimo 11 numeros ou caracteres'},
      {tipo: 'maxlength', aviso:'Maximo 11 numeros ou caracteres'}
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

  constructor(private formBuilder: FormBuilder) { }

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
  


  ngOnInit() {
  }

}
