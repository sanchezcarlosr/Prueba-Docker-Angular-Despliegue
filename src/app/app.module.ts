import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FormsModule } from '@angular/forms';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaTicketComponent } from './components/tabla-ticket/tabla-ticket.component';
import { TipoEspectadorPipe } from './pipe/tipo-espectador.pipe';
import { VerificarDniDirective } from './deirectivas/verificar-dni.directive';
import { VerificarPrecioDirective } from './deirectivas/verificar-precio.directive';


@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    FormularioComponent,
    TablaTicketComponent,
    TipoEspectadorPipe,
    VerificarDniDirective,
    VerificarPrecioDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
