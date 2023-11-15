import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ServiceTicketService {
  arrayTicket!: Array<Ticket>;

  constructor() {
    this.arrayTicket= new Array<Ticket>();
  }

  public addTicket(ticket:Ticket){
    ticket.id=this.arrayTicket.length+1;
    this.arrayTicket.push(ticket);
  }

  public getTickets(){
    return this.arrayTicket;
  }

  public deleteTicket(ticket:Ticket){
    this.arrayTicket.splice(this.getTickets().indexOf(ticket),1);
  }
  
  public update(ticket:Ticket){
    console.log("Ver el contenido que conseguio en el metodo modificar")
    let ticketOriginal:Ticket = this.getTicket(ticket.id!);

    ticketOriginal.tipoEspectador=ticket.tipoEspectador;
    ticketOriginal.precioReal=ticket.precioReal;
    ticketOriginal.precioCobrado=ticket.precioCobrado;
    ticketOriginal.fechaCobro=ticket.fechaCobro;
    
  }

  public getTicket(id:number):Ticket{
    
   return this.arrayTicket[this.arrayTicket.findIndex(t =>(t.id==id))]
    
  }

}
