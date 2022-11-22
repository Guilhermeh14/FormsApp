import { Usuario } from './../models/Usuario.model';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios: Usuario[] = [];

  constructor(private StorageService : StorageService) { }

  async login(email: string, senha: string) {
    this.buscarTodos();
    let usuario: Usuario;
    this.listaUsuarios.filter((item) => {
      if (item.email.toLocaleLowerCase() == email.toLocaleLowerCase()){
        usuario = item;
      }
    });

    if (usuario?.senha === senha) {
      return usuario;
    }
    return null;
  }

 async salvar(usuario: Usuario){
  this.buscarTodos();
  this.listaUsuarios[usuario.id] = usuario;
  this.StorageService.set('usuarios', this.listaUsuarios);
 }

 async buscarUm(id: number){
   this.buscarTodos();
   return this.listaUsuarios[id];
 }

 async buscarTodos(){
  this.listaUsuarios = (await this.StorageService.get('usuarios')) as unknown as Usuario[];
  if(!this.listaUsuarios) {
    return [];
  }
  return this.listaUsuarios;
 }

 async deletar(id: number){
   this.buscarTodos();
   this.listaUsuarios.splice(id, 1);
   this.StorageService.set('usuarios', this.listaUsuarios);
 }

 async salvarId(id: number){
   await this.StorageService.set('idUsuario', id);
 }

 
 async buscarId(){
   const id = await this.StorageService.get('idUsuario');

   if (!id) {
     return 0;
   }

   return id;
 }
 
}
