import { Injectable } from '@angular/core';
import { Modelos } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios:Modelos[];

  constructor() {
    this.usuarios= [
      {nombreUsuario:'Tomas', contrasenaUsuario:'Tomito10'},
      {nombreUsuario:'Benjamin', contrasenaUsuario:'Sonic45'},
      {nombreUsuario:'Peter', contrasenaUsuario:'Spiderman'}
    ]
   }

   getUser(){
    return this.usuarios
   }

  

  
}
