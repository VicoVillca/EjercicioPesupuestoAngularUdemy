import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.model';
import { TiendaService } from '../service/tienda.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ing';
  descripcion: string = '';
  monto: number = 0;
  constructor(public tienda:TiendaService) {}

  ngOnInit(): void {}
  guardar() {

    let r = new Registro(this.descripcion,this.monto);
    if(this.tipo=='ing'){
      console.log("Guardamos Ingresos");
      this.tienda.agregarIngreso(r);
    }else{
      this.tienda.agregarEgreso(r);
      console.log("Guardamos Egreso");
    }
    this.tipo = 'ing';
    this.descripcion = '';
    this.monto = 0;
  }
}
