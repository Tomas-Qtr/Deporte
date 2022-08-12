import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { PagesModule } from './pages/pages.module';
import {CarouselModule} from 'primeng/carousel';
//modulos nuevos
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';

import {CardModule} from 'primeng/card';
import { FormularioComponent } from './Prueba/formulario/formulario.component';
import { Formulario2Component } from './Prueba/formulario2/formulario2.component';
import {TableModule} from 'primeng/table';
import { UsuariosService } from './servicio/usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Formulario2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    PagesModule,
    CarouselModule,
    MenubarModule,
    //nuevos modulos
    

    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    TableModule,
    CardModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
