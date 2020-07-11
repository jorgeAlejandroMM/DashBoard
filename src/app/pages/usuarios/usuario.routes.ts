import { Routes } from '@angular/router';
import { UsuariosComponent } from './ListaUsuarios/usuarios.component';
import { EditarComponent } from './editarUsuario/editar.component';
import { SeguridadSesionGuard } from 'src/app/security/seguridad-sesion.guard';

export const usuarioRoutes:Routes=[
    {

        path:'ListUsuarios',
        component:UsuariosComponent,
        canActivate: [SeguridadSesionGuard],


    },
    {
        path:'EditarUsuario/:id',
        component:EditarComponent,
        canActivate: [SeguridadSesionGuard],

    },
    {
        path:'', 
        pathMatch:'full',
        redirectTo:'ListUsuarios'
    },
 

]