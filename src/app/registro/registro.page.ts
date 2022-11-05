import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro = this.formBuilder.group({
    email:['', Validators.compose([Validators.required, Validators.email])],

    cpf:['', Validators.compose([Validators.required, Validators.minLength(11),  Validators.maxLength(11)])],

    senha:['', Validators.compose([Validators.required, Validators.minLength(6)])],

    confirmarSenha:['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });

  mensagensErro = {
    email:[
      {tipo: 'required', aviso: 'Campo Obrigatório!'},
      {tipo: 'email', aviso: 'Digite um E-mail válido'}
    ],
    cpf:[
      {tipo: 'required', aviso: 'Campo Obrigatório!'},
      {tipo: 'minLength', aviso: 'Minimo 12 numeros ou caracteres'},
      {tipo: 'maxLength', aviso:'Maximo 12 numeros ou caracteres'}
    ],
    senha:[
      {tipo: 'required', aviso: 'Digite uma Senha'},
      {tipo: 'minLength', aviso: 'Minimo 6 caracteres'}
    ],
    confirmarSenha:[
      {tipo: 'required', aviso: 'Confirme a Senha'},
      {tipo: 'minLenght', aviso: 'Minimo 6 caracteres'}
    ],
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
