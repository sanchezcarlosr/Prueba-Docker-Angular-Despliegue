import { Component, OnInit } from '@angular/core';
import { Opciones } from 'src/app/models/opciones';

 

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  start:boolean=true;
  play:boolean=false;
  endGame:boolean=false;

  posicion:number=0;
  contadorCorrecta:number;//Cuentas la cantidad de respuestas acertadas
  contadorIncorrecta:number;//Cuenta la cantidad de respuestas equivocadas
  palabras!: Array<string>;//Es el array que tengo mis palabras para jugar
  arrayOpciones!:Array<number>;

  //arrayOpciones2!:Array<Opciones>;

  tipo:Array<string>=[
    "Letras","Vocales","Consonantes", "silaba"
  ]
  
  cantidadCorrecta!:number;//Es la cantidad correcta de L-V-C de una palabra
  opcionCorrecta!:string; //Es el tipo correcto L-V-C
  /**Guardara la palabra y el tipo de opcion que operare -> este ultimo para generar la opcion correcta*/
  palabraElejida!:string;//Es la palabra con la que jugaremos en cada partida sera secuencial
  
  constructor() {
    this.contadorIncorrecta=0;
    this.contadorCorrecta=0;
  }

  ngOnInit(): void {
    this.palabras=["perro","gato","burro","ornitorrinco", "gallina", "capibara", "avestruz", "escorpion","elefante","chachalaca", "tigre", "jaguar","yaguarete","jirafa", "tucan", "coyote", "perico"];
    this.palabras.sort( () => Math.random() - 0.5);
  }

  public generarPalabra(){
    
    this.palabraElejida = this.palabras[this.posicion++];
    this.opcionCorrecta = this.tipo[Math.floor(Math.random()*this.tipo.length)]; /**Opcion Correcta */
    this.arrayOpciones=new Array<number>();
    //this.arrayOpciones2=new Array<Opciones>(); recien comentado
    this.cantidadCorrecta=this.generarOpcionCorrecta(this.opcionCorrecta);
    this.mostrarOpciones();
    this.start=false
    this.play=true
    
    console.log("Generar Palabras")
    console.log("Cantidad correcta "+this.contadorCorrecta)
    console.log("CANTIDAD INCORRECTA  "+this.contadorIncorrecta)
  }

  public generarOpcionCorrecta(op:string):number{
    if(op==="Vocales"){
      return this.contarVocales();
    }if(op==="Consonantes"){
      return this.contarConsonante();
    }if(op==="Letras"){
      return this.contarLetras();
    }if(op==="silaba"){
      return this.contarSilabas();
    }
    return 0;
  }


  /**Funcion que cuenta las vocales */
  public contarVocales():number{
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of this.palabraElejida) {
      if (vocales.includes(letra.toLowerCase())) {
          cantidadVocales++;
      }
    }
    return cantidadVocales;
  }


  /**Funcion que cuenta las consonantes */
  public contarConsonante():number{ 
    const vocales = "aáeéiíoóuú";
    let cantidadConsonante = 0;
    for (const letra of this.palabraElejida) {
      if (!vocales.includes(letra.toLowerCase())) {
          cantidadConsonante++;
      }
    }
    return cantidadConsonante;
  }

  contarSilabas(): number {
    // Definir las vocales y diptongos
    const vocales = ["a", "e", "i", "o", "u"];
    const diptongos = ["ai", "au", "ei", "eu", "oi", "ou", "ia", "ie", "io", "iu", "ua", "ue", "uo"];
  
    // Inicializar el contador de sílabas
    let contador = 0;
  
    // Iterar por cada letra de la palabra
    for (let i = 0; i < this.palabraElejida.length; i++) {
      // Verificar si la letra actual es una vocal
      if (vocales.includes(this.palabraElejida[i])) {
        // Incrementar el contador de sílabas
        contador++;
  
        // Verificar si la vocal actual forma parte de un diptongo
        if (i < this.palabraElejida.length - 1 && diptongos.includes(this.palabraElejida.substr(i, 2))) {
          // Si la vocal actual forma parte de un diptongo, avanzar una letra más
          i++;
        }
      }
    }
  
    // Retornar el contador de sílabas
    return contador;
  }

  /**Funcion que cuenta las letras */
  public contarLetras():number{
    return this.palabraElejida.length;
  }

 
  public verificarRespuesta(verifi:number){
    if(verifi===this.cantidadCorrecta){
      console.log("Opcion Correcta")
      this.contadorCorrecta++;
    }else{
      console.log("Opcion Incorrecta")
      this.contadorIncorrecta++;
    }
    console.log(this.posicion)
    if(this.posicion===8){
      console.log("FIn del juego")
      this.play=false;
      this.endGame=true;
      this.posicion=0;
    }else{
      this.generarPalabra();
    }
  }


  public mostrarOpciones(){
    this.arrayOpciones.push(this.cantidadCorrecta);
    for(let i=0;i<3;i++){
      this.arrayOpciones.push(this.contarCantidadIncorrecta());
    }
    this.arrayOpciones.sort( () => Math.random() - 0.5);
  }
 
 
  // //Version 2 por las dudas
  // public mostrarOpciones2(){

  //   for(let i=0;i<3;i++){
  //     console.log(this.tipo[i]);
  //     this.arrayOpciones2.push(new Opciones(this.generarOpcionCorrecta(this.tipo[i]),this.tipo[i]));
  //   }
  //   this.arrayOpciones2.sort( () => Math.random() - 0.5);

  // }
  // //Version 2
  // public verificarRespuesta2(verifi:Opciones){
  //   if(verifi.cantidad===this.cantidadCorrecta && verifi.correcta===this.opcionCorrecta){
  //     console.log("Opcion Correcta")
  //     this.contadorCorrecta++;
  //   }else{
  //     console.log("Opcion Incorrecta")
  //     this.contadorIncorrecta++;
  //   }
  //   console.log(this.posicion)
  //   if(this.posicion===4){
  //     console.log("FIn del juego")
  //     this.play=false;
  //     this.endGame=true;
  //     this.posicion=0;
  //   }else{
  //     this.generarPalabra();
  //   }
  // }























//Posiblemente eliminar, descartado la eliminacion fecha: Sabado 29 Abril
  public contarCantidadIncorrecta():number{
    let band:boolean=false;
    let c:number=12;
    while(band===false){
      c=Math.floor(Math.random()*11);//2 4
      if(!this.arrayOpciones.includes(c) && c!=0){
        band=true;
      }
    }
    return c;
  }


  public recetearValores(){
    this.contadorCorrecta=0;
    this.contadorIncorrecta=0;
    this.start=true;
    this.endGame=false;
    console.log(this.contadorCorrecta)
    console.log(this.contadorIncorrecta)
    console.log("Entre verificar receteo")
  }
  

}
