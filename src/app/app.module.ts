import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AsignarCuentaComponent } from './asignar-cuenta/asignar-cuenta.component';
import { AsignarChequeraComponent } from './asignar-chequera/asignar-chequera.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    AsignarCuentaComponent,
    AsignarChequeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
