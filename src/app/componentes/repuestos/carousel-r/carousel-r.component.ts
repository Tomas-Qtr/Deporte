import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-r',
  templateUrl: './carousel-r.component.html',
  styleUrls: ['./carousel-r.component.css']
})
export class CarouselRComponent implements OnInit {

  repuesto:object[]=[
    {
      imagem:'https://1.bp.blogspot.com/-GBrSOYsr9Tg/Vyju4NMj4YI/AAAAAAAAKjs/uO47E42BVsYtQ1uboDpj-79ry6k5Jbj5ACLcB/s1600/v8-alfa-romeo.jpg',
      nombre:'Motor'
    },
    {
      imagem:'https://images.milenio.com/WJaZRBjvLasmcGOXuDAPFfqpsIY=/300x186/uploads/media/2021/04/19/vehiculos-fallar-transmision-constantes-cambios_58_0_1085_676.jpg',
      nombre:'Transmicion'
    },
    {
      imagem:'https://www.autofacil.es/wp-content/uploads/2021/05/frenoscocheapertura-1.jpg',
      nombre:'Frenos'
    },
    {
      imagem:'http://autobild.com.mx/wp-content/uploads/2019/08/luces-blancas-carro.jpg',
      nombre:'Luces'
    },
    {
      imagem:'https://imagenes.elpais.com/resizer/GP9j99leaLEVfR9AtYS1aKZwD0U=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OWZJT7UC24IYM5VABKUJPI3KD4.jpg',
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
