import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(
    private http: HttpClient,
  ) { }

  crearCliente(cui:string, nombre:string, apellido:string, direccion:string, telefono:string){

    return this.http.post('http://localhost:8080/api/cliente',{
      "cui":cui,
      "nombre":nombre,
      "apellido":apellido,
      "direccion": direccion,
      "telefono":telefono
    });

  }

  crearCuenta(numero_cuenta: string, saldo:number,id_tipo:number,id_CLIENTE:number){

    return this.http.post('http://localhost:8080/api/cuenta',{
      "numero_cuenta":numero_cuenta,
      "saldo":saldo,
      "id_tipo":id_tipo,
      "id_cliente": id_CLIENTE
    });

  }

  crearChequera(fecha: Date, num_inicio:number, num_fin:number, numero_cuenta:string){

    return this.http.post('http://localhost:8080/api/chequera',{
      "fecha":fecha,
      "num_inicio":num_inicio,
      "num_fin":num_fin,
      "id_cuenta": numero_cuenta
    });

  }

  get(){
    return this.http.get('http://localhost:8080/api/cliente');
  }

  getCuentas(){
    return this.http.get('http://localhost:8080/api/cuenta');
  }

  getChe(){
    return this.http.get('http://localhost:8080/api/chequera');
  }

  deleteCliente(id:number){
    return this.http.delete('http://localhost:8080/api/cliente/'+id);
  }

  deleteCuenta(id_cuenta: number) {
    return this.http.delete('http://localhost:8080/api/cuenta/'+id_cuenta);
  }

  deleteChe(id_chequera: number) {
    return this.http.delete('http://localhost:8080/api/chequera/'+id_chequera);
  }
}
