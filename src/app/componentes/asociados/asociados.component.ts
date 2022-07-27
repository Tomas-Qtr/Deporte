import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  marcas:object[]=[{
    imagen:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png"
  },
  {
    imagen:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png"
  },
  {
    imagen:"https://es.logodownload.org/wp-content/uploads/2019/10/toyota-logo-41.png"
  },
  {
    imagen:"https://i.pinimg.com/originals/e5/f8/d0/e5f8d0ebd65047e6e30e45299b708c35.png"
  },
  {
    imagen:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c479.png"
  },
  {
    imagen:"https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png"
  },
  {
    imagen:"https://www.pngmart.com/files/15/Ferrari-Logo-PNG-Free-Download.png"
  },
  {
    imagen:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
  },
  {
    imagen:"https://www.pngplay.com/wp-content/uploads/13/BMW-Logo-Transparent-PNG.png"
  },
  {
    imagen:"http://assets.stickpng.com/images/584831f6cef1014c0b5e4aa6.png"
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
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
