import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenubarModule } from 'primeng/menubar';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { UsuarioComponent } from './usuario/usuario.component';







@NgModule({
  declarations: [
    HomeComponent,
    VehiculosComponent,
   
    NosotrosComponent,
    ServiciosComponent,
    RepuestosComponent,
    UsuarioComponent
  ],
  exports:[
    HomeComponent,
    VehiculosComponent,
    NosotrosComponent,
    ServiciosComponent,
    RepuestosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule,
    MenubarModule
    
    
    
  ]
})
export class PagesModule { }
