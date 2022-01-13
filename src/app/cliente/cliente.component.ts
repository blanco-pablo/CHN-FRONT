import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  ) {
    this.form = this.formBuilder.group({
      cui: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  crearCliente(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const { cui, nombre, apellido, direccion, telefono } = this.form.value;
      this.clienteService.crearCliente(cui, nombre, apellido, direccion, telefono)
      .subscribe(
        (data)=>{
          console.log(data);
        },(error)=>{
          console.error(error);
      });
      console.log(cui);
    }
  }

}
