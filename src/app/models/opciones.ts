export class Opciones {
    cantidad!:number; /**Numero de L, V, C */
    correcta!:string;  /** L, V, C    --> C=cantidadCorrecta c=OpcionCorrecta*/
    constructor(cantidad:number, correcta:string) {
        this.cantidad=cantidad;
        this.correcta=correcta;
    }
    
}
