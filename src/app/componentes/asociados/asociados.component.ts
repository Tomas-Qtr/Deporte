import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  marcas:object[]=[{
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  {
    imagen:"../../assets/Logo_Adidas.png"
  },
  
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
