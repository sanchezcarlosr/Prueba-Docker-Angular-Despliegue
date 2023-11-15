import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { ServiceTicketService } from 'src/app/services/service-ticket.service';

@Component({
  selector: 'app-tabla-ticket',
  templateUrl: './tabla-ticket.component.html',
  styleUrls: ['./tabla-ticket.component.css']
})
export class TablaTicketComponent implements OnInit {

  arrayTicket:Array<Ticket>;
  arrayTicketFiltrado:Array<Ticket>;
  tipo:string="";
  total:number;
  tickets:number;
  constructor(private ticketService:ServiceTicketService, private router:Router) { 
    this.arrayTicket=new Array<Ticket>();
    this.arrayTicketFiltrado=new Array<Ticket>();
    this.obtenerTickets();
    this.total=0;
    this.tickets=0;
  }

  ngOnInit(): void {
    
  }

  public obtenerTickets(){
    this.arrayTicket=this.ticketService.getTickets();
  }

  public registrarTicket(){
    this.router.navigate(["formulario", 0]);
  }

  public eliminarTicket(ticket:Ticket){
    /**original:
     * this.ticketService.deleteTicket(ticket);
     * no estaba el resto de filtrarTicket()
     */
    this.ticketService.deleteTicket(ticket);
    this.filtrarTicket();
  }

  public modificarTicket(ticket:Ticket){
    this.router.navigate(["formulario", ticket.id])
  }

  public filtrarTicket(){
    this.total=0;
    this.tickets=0;
    if(this.tipo!="t"){
      this.arrayTicketFiltrado = this.arrayTicket.filter(f=>f.tipoEspectador==this.tipo);
    }else{
      this.arrayTicketFiltrado = this.arrayTicket.filter(f=>f.tipoEspectador!=this.tipo);
    }
    this.calcularTotal();
  }

  public calcularTotal(){
    this.tickets=this.arrayTicketFiltrado.length;
    for(let f of this.arrayTicketFiltrado){
      this.total+=Number(f.precioCobrado);
    }
  }
  
}
