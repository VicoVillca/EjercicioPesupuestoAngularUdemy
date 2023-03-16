import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { TiendaService } from './service/tienda.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    EgresosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
