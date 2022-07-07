import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.css']
})
export class CardProductosComponent implements OnInit {

  
  
  productos:object[]=[
    {imagen:"https://assets.adidas.com/images/w_600,f_auto,q_auto/d1ca481027a9400d96f1abbc00f7b05b_9366/Chomba_Boca_Juniors_Blanco_GL7521_01_laydown.jpg",
     precio:1900.00,
     nombre:"chomba de boca",
     marca:"addidas",
     genero:"masculino" 
  },
  {imagen:"https://static.abc.es/media/summum/2020/03/01/nike-air-max-270-k0rB--510x287@abc.jpg",
  precio:20000.00,
  nombre:"zapatillas negras",
  marca:"nike",
  genero:"unisex" 
      }, 
      {imagen:"https://assets.adidas.com/images/w_600,f_auto,q_auto/fb618df403754fb1aad6ae93016c1dfd_9366/Camiseta_Local_River_Plate_21-22_Blanco_GB1301_01_laydown.jpg",
      precio:15000.00,
      nombre:"camisa de river de enzo",
      marca:"addidas",
      genero:"masculino" 
      }, 
      {imagen:"https://static.dafiti.com.ar/p/umbro-6136-945605-1-product.jpg",
      precio:5000.00,
      nombre:"remera negra",
      marca:"umbro",
      genero:"femenino" 
      }, 
      {imagen:"https://media.tycsports.com/files/2022/03/31/409274/al-rihla_w416.jpg",
      precio:37000.00,
      nombre:"pelota del mundial",
      marca:"addidas",
      genero:"nulo" 
      }, 
      {imagen:"https://cf.shopee.com.ar/file/71ffc1f9623dc3f8f8109f804428845d_tn.jpg",
      precio:12000.00,
      nombre:"campera del manchester city",
      marca:"puma",
      genero:"masculino" 
      }

    ]
  constructor() { 

    
  }

  ngOnInit(): void {
    
  }

}
