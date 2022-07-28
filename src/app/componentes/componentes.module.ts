import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsociadosComponent } from './asociados/asociados.component';
import { BannerComponent } from './banner/banner.component';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { CardPersonaComponent } from './card-persona/card-persona.component';
import { DeportesComponent } from './deportes/deportes.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FotherComponent } from './fother/fother.component';
import { HeaderComponent } from './header/header.component';
import { PagosComponent } from './pagos/pagos.component';
import { VideoPresentComponent } from './video-present/video-present.component';
import {CarouselModule} from 'primeng/carousel';
import { BannerVComponent } from './vehiculos/banner-v/banner-v.component';
import { CartasVComponent } from './vehiculos/cartas-v/cartas-v.component';
import { RegistroVComponent } from './vehiculos/registro-v/registro-v.component';
import { RouterModule } from '@angular/router';
import { BannerSComponent } from './servicios/banner-s/banner-s.component';
import { CartasSComponent } from './servicios/cartas-s/cartas-s.component';
import { ContactoSComponent } from './servicios/contacto-s/contacto-s.component';
import { SoporteSComponent } from './servicios/soporte-s/soporte-s.component';
import { MenubarModule } from 'primeng/menubar';
//modulos nuevos
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';

import {CardModule} from 'primeng/card';
import { BannerRComponent } from './repuestos/banner-r/banner-r.component';
import { CarouselRComponent } from './repuestos/carousel-r/carousel-r.component';
import { CardRComponent } from './repuestos/card-r/card-r.component';
import { ContactoRComponent } from './repuestos/contacto-r/contacto-r.component';
import { RegitroComponent } from './usuario/regitro/regitro.component';
import { BannerNComponent } from './nosotros/banner-n/banner-n.component';
import { HistoriaNComponent } from './nosotros/historia-n/historia-n.component';
import { ContactoNComponent } from './nosotros/contacto-n/contacto-n.component';
import { ImportacionesComponent } from './nosotros/importaciones/importaciones.component';
import { SomosNComponent } from './nosotros/somos-n/somos-n.component';

@NgModule({
  declarations: [
    AsociadosComponent,
    BannerComponent,
    CardProductosComponent,
    CardPersonaComponent,
    DeportesComponent,
    DescripcionComponent,
    FotherComponent,
    HeaderComponent,
    PagosComponent,
    VideoPresentComponent,
    BannerVComponent,
    CartasVComponent,
    RegistroVComponent,
    BannerSComponent,
    CartasSComponent,
    ContactoSComponent,
    SoporteSComponent,
    BannerRComponent,
    CarouselRComponent,
    CardRComponent,
    ContactoRComponent,
    RegitroComponent,
    BannerNComponent,
    HistoriaNComponent,
    ContactoNComponent,
    ImportacionesComponent,
    SomosNComponent
  ],
  exports:[
    AsociadosComponent,
    BannerComponent,
    CardProductosComponent,
    CardPersonaComponent,
    DeportesComponent,
    DescripcionComponent,
    FotherComponent,
    HeaderComponent,
    PagosComponent,
    VideoPresentComponent,
    BannerVComponent,
    CartasVComponent,
    RegistroVComponent,
    BannerSComponent,
    CartasSComponent,
    ContactoSComponent,
    SoporteSComponent,
    BannerRComponent,
    CarouselRComponent,
    CardRComponent,
    ContactoRComponent,
    RegitroComponent,
    BannerNComponent,
    HistoriaNComponent,
    ContactoNComponent,
    ImportacionesComponent,
    SomosNComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    MenubarModule,
    //nuevos modulos
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,


    CardModule
  ]
})
export class ComponentesModule { }
