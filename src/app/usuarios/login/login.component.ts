import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private servicioAuth:AuthService) { }

  ngOnInit(): void {
  }

  login():void{
    // console.log("Formulario enviado");
    // console.log(this.usuario);
    this.servicioAuth.login(this.usuario).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
}
}
