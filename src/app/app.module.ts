import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { OsComponent } from './pages/os/os.component';
import { TiposComponent } from './pages/tipos/tipos.component';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpleadosComponent,
    DispositivosComponent,
    OsComponent,
    TiposComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [JwtHelperService , { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
