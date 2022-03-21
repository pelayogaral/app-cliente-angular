import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  urlEndPoint="http://localhost:7070/api/clientes";
  login(){
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Usuario[])
    );
  }
}
