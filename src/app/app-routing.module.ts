import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistryComponent } from './pages/register/register.component';
import { SeguridadSesionGuard } from './security/seguridad-sesion.guard';
import { HomeComponent } from './pages/home/home.component';
import { usuarioRoutes } from './pages/usuarios/usuario.routes';
import { navbarUsers } from './pages/usuarios/navbarUsers.component';
import { MapComponent } from './pages/map/map.component';


const routes: Routes = [
  {
    path:'Login',
    component : LoginComponent
    
  },
  {
    path:'Registro',
    component:RegistryComponent
  },
  {
    path:'navbarUsers',
    component: navbarUsers,
    canActivate: [SeguridadSesionGuard],
    children: usuarioRoutes
  },
 
  {
    path: "Home",
    component:HomeComponent,
    canActivate: [SeguridadSesionGuard]
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
