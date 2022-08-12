import { Component } from '@angular/core';
import { AlertaService } from './servicio/alerta.service';
import { UsuariosService } from './servicio/usuarios.service';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private servicio2:AlertaService, private servicioUsuario:UsuariosService){

  }
  title = 'StarCar';

  editVisible=false
  items:object[]=[]
  usuarios= this.servicioUsuario.getUser()
  mostrar(){
    this.servicio2.mostrarAlerta('Mostarmos servicio en home')
    
  }

  verificarUsuario(){
    let losusuarios = this.usuarios
    losusuarios.forEach(usuario =>{
      if(usuario.nombreUsuario == 'Tomas'){
        if(usuario.contrasenaUsuario == 'Tomito10'){
          alert('el usuario es correcto')
          this.editVisible= true
          this.ngOnInit()
        }
      }
    })
  }
  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          routeLink:'editar',
          visible: this.editVisible
      }
  ];
}
}
   