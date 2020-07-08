import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistryComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarComponent } from './pages/usuarios/editarUsuario/editar.component';
import {UsuariosComponent} from './pages/usuarios/ListaUsuarios/usuarios.component';
import { navbarUsers } from './pages/usuarios/navbarUsers.component';
//MapBox 
import { MapComponent } from './pages/map/map.component';
//Graficoa
import { ChartsModule } from 'ng2-charts';
//GraphBarra
import { BarraComponent } from './pages/component/graph/barra/barra.component';
import { CommercesTableComponent } from './pages/component/commerces-table/commerces-table.component';
import { DonaComponent } from './pages/component/graph/dona/dona.component';
import { RadarComponent } from './pages/component/graph/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    NavbarComponent,
    HomeComponent,
    UsuariosComponent,
    EditarComponent,
    navbarUsers,
    MapComponent,
    BarraComponent,
    CommercesTableComponent,
    DonaComponent,
    RadarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
