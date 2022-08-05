import { Component } from '@angular/core';
import { AlertaService } from './servicio/alerta.service';
import { UsuariosService } from './servicio/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private servicio2:AlertaService, private servicioUsuario:UsuariosService){

  }
  title = 'StarCar';

  usuarios= this.servicioUsuario.getUser()
  mostrar(){
    this.servicio2.mostrarAlerta('Mostarmos servicio en home')
    
  }
  ngOnInit(): void {

    console.log(this.usuarios)
  }
}
