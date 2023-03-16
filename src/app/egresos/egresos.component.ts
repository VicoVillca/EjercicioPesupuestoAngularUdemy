import { Component, Input } from '@angular/core';
import { Registro } from '../registro.model';
import { TiendaService } from '../service/tienda.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
})
export class EgresosComponent  {
   @Input() sumIngresos:number;
  egresos: Registro[] = [];
  constructor(public tienda: TiendaService) {this.egresos = this.tienda.egresos;}



  porcentaje(num:number):number{
    let c= Math.round((num/this.sumIngresos)*100);
    return c;
  }
  eliminar(i:Registro){
    console.log("eliminamos  "+i);
    this.tienda.eliminarEgreso(i);

  }
}
