import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-r',
  templateUrl: './carousel-r.component.html',
  styleUrls: ['./carousel-r.component.css']
})
export class CarouselRComponent implements OnInit {

  repuesto:object[]=[
    {
      imagem:'../../../../assets/page-repuesto/motor.jpg',
      nombre:'Motor'
    },
    {
      imagem:'../../../../assets/page-repuesto/volante.jpg',
      nombre:'Transmicion'
    },
    {
      imagem:'../../../../assets/page-repuesto/frenos.jpg',
      nombre:'Frenos'
    },
    {
      imagem:'../../../../assets/page-repuesto/luces.jpg',
      nombre:'Luces'
    },
    {
      imagem:'../../../../assets/page-repuesto/accesorios.jpg',
      nombre:'Acesorios'
    }
    
    
  ]
  responsiveOptions:object[]=[ ]
  constructor() { }

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
