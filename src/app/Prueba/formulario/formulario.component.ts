import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicio/alerta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private misericio:AlertaService) { }

  ngOnInit(): void {

    
  }

  lanzardialogo(){
    this.misericio.mostrarAlerta('La alerta esta funcionando')

  }

}
