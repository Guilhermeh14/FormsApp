import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios: Usuario[] = [];

  constructor(private StorageService : StorageService) { }

 async salvar(){}
 async buscarUm(){}
 async buscarTodos(){}
 async deletar(){}

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
