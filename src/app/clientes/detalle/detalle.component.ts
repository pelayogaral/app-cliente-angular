import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  cliente!:Cliente;
  constructor(private servicioCliente:ClienteService, private routerActive:ActivatedRoute) { }

  ngOnInit(): void {
    // this.routerActive.paramMap.subscribe(
    //   param =>{let id = param.get('id');
    //   this.cliente = this.servicioCliente.getCliente(Number(id));
    // });

  }

}
