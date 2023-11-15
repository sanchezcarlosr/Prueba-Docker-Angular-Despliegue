import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaTicketComponent } from './components/tabla-ticket/tabla-ticket.component';


const routes: Routes = [
  {path:"",component:Punto1Component},
  {path:"juego", component:Punto2Component},
  {path:"formulario/:id", component:FormularioComponent},
  {path:"tabla", component:TablaTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
