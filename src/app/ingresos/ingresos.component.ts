import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { TiendaService } from '../service/tienda.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  ingresos: Registro[] = [];
  constructor(public tienda: TiendaService) {}

  ngOnInit(): void {
    this.ingresos = this.tienda.ingresos;
  }
  eliminar(j: Registro) {
    this.tienda.eliminarIngreso(j);
  }
}
