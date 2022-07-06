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
    VideoPresentComponent
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
    VideoPresentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
