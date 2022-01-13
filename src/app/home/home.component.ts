import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data$!: Observable<any>;
  cuenta$!: Observable<any>;
  che$!: Observable<any>;
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.data$ = this.clienteService.get();
    this.cuenta$ = this.clienteService.getCuentas();
    this.che$ = this.clienteService.getChe();
    this.clienteService.getChe().subscribe((data) => {
      console.log(data);
    });
  }

  eliminar(id_CLIENTE: number) {
    console.log(id_CLIENTE);
    this.clienteService.deleteCliente(id_CLIENTE).subscribe((data)=> {
      window.location.reload();
    });
  }

  eliminarCuenta(id_cuenta: number) {
    console.log(id_cuenta);
    this.clienteService.deleteCuenta(id_cuenta).subscribe((data)=> {
      window.location.reload();
    });
  }

  eliminarChequera(id_chequera: number) {
    console.log(id_chequera);
    this.clienteService.deleteChe(id_chequera).subscribe((data)=> {
      window.location.reload();
    });
  }

}
