import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

//Modules propios
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material/material.module';

// Components

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

//PIPES
import { ImagenPipe } from './pipes/image.pipe';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
      ImagenPipe,
      AgregarComponent, 
      BuscarComponent, 
      DialogComponent,
      HeroeComponent, 
      HomeComponent, 
      ListadoComponent, 
      HeroeTarjetaComponent, 
    ],
  imports: [
      CommonModule,
      FormsModule, 
      FlexLayoutModule,
      AppRoutingModule,
      MaterialModule
  ]
})
export class HeroesModule { }
