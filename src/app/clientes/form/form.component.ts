import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesComponent } from '../clientes.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  titulo:string = "Nuevo cliente";
  cliente:Cliente = new Cliente();
  constructor() { }

  ngOnInit(): void {
  }
  create():void{
    console.log("Formulario enviado");
    console.log(this.cliente);
  }
}
