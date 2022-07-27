import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css']
})
export class CardPersonaComponent implements OnInit {

    autos:object[]=[
      {
        imagen:'https://es.alfaromeousa.com/content/dam/alfausa/megaMenu/all-vehicles/2022-AlfaRomeo-LineUp-Giulia.png.image.500.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'https://www.alfaromeo.es/content/dam/alfa/cross/homepage/trim/Trim-Giulia_ESTREMA.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'https://www.alfaromeo.es/content/dam/alfa/cross/homepage/trim/Trim-Stelvio_TI.png',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/06-images/cruze-rs.png?imwidth=960',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'https://ss-static-01.esmsv.com/id/145742/productos/obtenerimagen/?id=71&useDensity=false&width=1280&height=720&tipoEscala=contain',
        nombre:'',
        marca:'',
        tipo:''
      },
      {
        imagen:'https://es.alfaromeousa.com/content/dam/alfausa/megaMenu/all-vehicles/2022-AlfaRomeo-LineUp-Giulia.png.image.500.png',
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
