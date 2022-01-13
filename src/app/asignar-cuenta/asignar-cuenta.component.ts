import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-asignar-cuenta',
  templateUrl: './asignar-cuenta.component.html',
  styleUrls: ['./asignar-cuenta.component.css']
})
export class AsignarCuentaComponent implements OnInit {
  form!: FormGroup;
  data$ !: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  ) {
    this.form = this.formBuilder.group({
      numero_cuenta: ['', [Validators.required]],
      saldo: ['', [Validators.required]],
      id_tipo : [''],
      id_CLIENTE: ['']
    });
   }

  ngOnInit(): void {
    this.data$ = this.clienteService.get();
  }

  crearCliente(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const { numero_cuenta, saldo, id_tipo,id_CLIENTE } = this.form.value;
      this.clienteService.crearCuenta(numero_cuenta, saldo,id_tipo,id_CLIENTE)
      .subscribe(
        (data)=>{
          console.log(data);
        },(error)=>{
          console.error(error);
      });
    }
  }
}
