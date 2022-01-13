import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-asignar-chequera',
  templateUrl: './asignar-chequera.component.html',
  styleUrls: ['./asignar-chequera.component.css'],
})
export class AsignarChequeraComponent implements OnInit {
  form!: FormGroup;
  data$!: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {
    this.form = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      num_inicio: ['', [Validators.required]],
      num_fin: [''],
      numero_cuenta: [''],
    });
  }

  ngOnInit(): void {
    this.clienteService.getCuentas().subscribe((data) => {
      console.log(data);
    });
    this.data$ = this.clienteService.getCuentas();
  }

  crearCliente(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const { fecha, num_inicio, num_fin, numero_cuenta } = this.form.value;
      this.clienteService
        .crearChequera(fecha, num_inicio, num_fin, numero_cuenta)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
      console.log(fecha, num_inicio, num_fin, numero_cuenta);
    }
  }
}
