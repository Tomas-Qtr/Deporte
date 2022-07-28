import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css']
})
export class CardPersonaComponent implements OnInit {

    autos:object[]=[
      {
        imagen:'../../../assets/carrousel-autos/auto1.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'../../../assets/carrousel-autos/auto2.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'../../../assets/carrousel-autos/auto3.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'../../../assets/carrousel-autos/auto4.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'../../../assets/carrousel-autos/auto5.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'../../../assets/carrousel-autos/auto1.png',
        nombre:'',
        marca:'',
        tipo:''
      },
    ]
    
    responsiveOptions:object[]=[ ]
  constructor() {
    
    
  
    }

   



  ngOnInit(): void {
    
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];


  }
  
}
