import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }
  urlEndPoint="http://localhost:7070/api/clientes"

  // getClientes():Observable<Cliente[]>{
  //   return of(CLIENTES);
  // }
  getClientes():Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }

}
