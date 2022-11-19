import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //cria variavel storage pra instanciar e se for nula mantém ela nula
  private _storage: Storage | null = null;

  //cria a instancia do storage pra trabalhar com storage do ionic
  constructor(private storage: Storage) {
    //chama a função init quando o serviço é instanciado
    this.init();
  }

  async init() {
    //inicializa o banco de dados, chama a funçao create, e caso nao exista cria o banco de dados, 
    //caso exista ele traz o banco pra trabalhar com o banco
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //set guarda get pega, passar parametros onde e oque, string a chave do armario e value oque vai ser guardado
  //pra salvar passa a chave e o valor
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  async remove(key: string) {
    await this._storage.remove(key);
  }
}