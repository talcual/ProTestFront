import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { LoginComponent } from './pages/login/login.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { OsComponent } from './pages/os/os.component';
import { TiposComponent } from './pages/tipos/tipos.component';
 
//importing guard service
import { GuardService } from './services/guard.service';

// routes
const routes: Routes = [
  { path: 'index', component: LoginComponent },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [GuardService]},
  { path: 'dispositivos', component: DispositivosComponent, canActivate: [GuardService]},
  { path: 'os', component: OsComponent, canActivate: [GuardService]},
  { path: 'tipos', component: TiposComponent, canActivate: [GuardService]},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
