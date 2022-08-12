import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PagesModule } from './pages/pages.module';
import { RepuestosComponent } from './pages/repuestos/repuestos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { Formulario2Component } from './Prueba/formulario2/formulario2.component';

const routes: Routes = [
  /* {path:'', component: HomeComponent},
  {path:'vehiculos' , component: VehiculosComponent},
  {path:'nosotros' , component: NosotrosComponent},
  {path:'servicios' , component: ServiciosComponent},
  {path:'repuestos' , component: RepuestosComponent},
  {path:'usuario' , component: UsuarioComponent}, */
  {path:'editar' , component: Formulario2Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'}),
  PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
