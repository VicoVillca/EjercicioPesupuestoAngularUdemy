import { Registro} from '../registro.model';

export class TiendaService {
  ingresos: Registro[] = [
    new Registro('Salario', 3500),
    new Registro('Comidita', 3500),
  ];
  egresos: Registro[] = [ new Registro('Comidita', 3500)];

  agregarIngreso(registro: Registro) {
    this.ingresos.push(registro);

  }

  eliminarIngreso(j: Registro) {
    console.log("Length = "+this.ingresos.length);
    let index= this.ingresos.indexOf(j);
    this.ingresos.splice(index,1);
  }

  agregarEgreso(registro: Registro) {
    this.egresos.push(registro);

  }
  eliminarEgreso(j: Registro) {
    console.log("Length = "+this.egresos.length);
    let index= this.egresos.indexOf(j);
    this.egresos.splice(index,1);
  }


}
