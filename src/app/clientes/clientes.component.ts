import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes!:Cliente[];
  constructor(private servicioClientes:ClienteService) { }

  ngOnInit(): void {
    this.servicioClientes.getClientes().subscribe(
      resp => this.clientes = resp
    );
  }
  eliminarCliente(index:number){
    if(confirm("¿Estas seguro que quieres eliminar este cliente?"))
    {
      this.clientes.splice(index,1);
    }
  }
}
