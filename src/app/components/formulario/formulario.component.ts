import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { ServiceTicketService } from 'src/app/services/service-ticket.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ticket:Ticket;
  ticketCopia!:Ticket;
  accion:string="new";
  constructor(private ticketService:ServiceTicketService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] === '0'){
        this.accion="new";
      }else{
        this.accion="update";
        this.obtenerTicket(params['id']);
      }
    });
  }

  public guardarTicket(){
    this.ticketService.addTicket(this.ticket);
    console.log(this.ticket)
    this.router.navigate(["tabla"])
  }

  public obtenerTicket(id:number){
    console.log("Entre a ver que onda")
    this.ticketCopia = this.ticketService.getTicket(id);
    this.ticket={ ...this.ticketCopia}; //Creamos una nueva instancia de este objeto, una copia independiente
    //Salvando valores originales
    //Ver si se puede mejorar, es mucho codigo
    // this.ticketCopia=new Ticket();
    // this.ticketCopia.precioCobrado=this.ticket.precioCobrado;
    // this.ticketCopia.precioReal=this.ticket.precioReal;
    // this.ticketCopia.tipoEspectador=this.ticket.tipoEspectador;
  }
  public calcularDescuento(){
    console.log("Entre a realizar el calculo")
    this.ticket.precioCobrado=this.ticket.precioReal;
    if(this.ticket.tipoEspectador==="l"){
      this.ticket.precioCobrado = this.ticket.precioReal - ( this.ticket.precioReal * 0.20 );
    }

  }

  public modificarTicket(){
    console.log("Ingrese al modificar")
    console.log(this.ticketCopia);
    console.log(this.ticket)
    this.ticketService.update(this.ticket);
    this.router.navigate(["tabla"]);
  }
  
  public cancelarModificacion(){
    this.ticket=this.ticketCopia;
    //Este metodo esta vinculado con el obtener ticket que posee  mucho codigo, ver si se puede mejorar
    // this.ticket.precioCobrado=this.ticketCopia.precioCobrado;
    // this.ticket.precioReal=this.ticketCopia.precioReal;
    // this.ticket.tipoEspectador=this.ticketCopia.tipoEspectador;
    this.router.navigate(["tabla"]);
  }
}
