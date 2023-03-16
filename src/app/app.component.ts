import { Component, OnInit } from '@angular/core';
import { Registro } from './registro.model';
import { TiendaService } from './service/tienda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'presupuesto-app';
  ingreso: Registro[];
  egreso: Registro[];
  constructor(public tienda: TiendaService) {
    this.ingreso = this.tienda.ingresos;
    this.egreso = this.tienda.egresos;
  }
  getIngresoTotal(): number {
    let c = 0;
    for (let i = 0; i < this.ingreso.length; i++) {
      c += this.ingreso[i].monto;
    }
    return c;
  }
  getEgresoTotal(): number {
    let c = 0;
    for (let i = 0; i < this.egreso.length; i++) {
      c += this.egreso[i].monto;
    }
    return c;
  }

  /**
   componentes a crar
   cabecero
   formulario
   ingreso
   egreso
   */
}
