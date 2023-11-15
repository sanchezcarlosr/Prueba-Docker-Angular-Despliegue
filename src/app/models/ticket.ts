export class Ticket {
    id?:number;
    dni?: string;
    precioReal:number=200;
    tipoEspectador?:string;
    fechaCobro?:Date;
    precioCobrado:number=0;
    
    constructor(id?:number,dni?:string,precioReal?:number, tipoEspectador?:string, precioCobrado?:number){
        this.id=id;
        this.dni=dni;
       // this.precioReal=precioReal;
        this.tipoEspectador=tipoEspectador;
        this.fechaCobro= new Date();
       // this.precioCobrado=precioCobrado;
    }

}
