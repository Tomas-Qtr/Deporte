import { Component, OnInit } from '@angular/core';
import { Modelos } from 'src/app/modelos';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
//import { UsuariosService } from '././servicio/usuarios.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
 
  constructor(private servicioUsuario:UsuariosService) { }

  usuarios= this.servicioUsuario.getUser()

  recorrerUsuario(){
    let mostarUsuario= this.usuarios

    
  }

  ngOnInit(): void {

    this.usuarios
  }

}
