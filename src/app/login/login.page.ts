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

  constructor(private formBuilder: FormBuilder) { }

  get email(){
    return this.formLogin.get('email');
  }

  get senha(){
    return this.formLogin.get('senha');
  }

  ngOnInit() {
  }

}
