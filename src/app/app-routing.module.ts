import { AsignarCuentaComponent } from './asignar-cuenta/asignar-cuenta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { AsignarChequeraComponent } from './asignar-chequera/asignar-chequera.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'crearCliente',
    component: ClienteComponent,
  },
  {
    path: 'asignarCuenta',
    component: AsignarCuentaComponent,
  },
  {
    path: 'asignarChequera',
    component: AsignarChequeraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
