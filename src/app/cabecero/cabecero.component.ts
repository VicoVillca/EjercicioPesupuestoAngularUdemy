import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent {
  @Input() ingresos!: number;
  @Input() egresos!: number;
  porcentaje():number{
    let c= Math.round((this.egresos/this.ingresos)*100);
    return c;
  }
}
