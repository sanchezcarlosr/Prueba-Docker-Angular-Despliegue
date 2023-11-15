import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})

export class Punto1Component implements OnInit {
  total: number=0;
  productos!: Array<Producto>;
  carrito: Array<Producto>= new Array<Producto>();

  constructor() { 
  }

  ngOnInit(): void {
    this.productos=[
      {_id: 1 ,nombre:"Smart TV LG", img:"../../../assets/image/TVLG.png", descripcion:"Smart TV, 4K Procesador Inteligente 5 generación 5, Magic Remote", precio:235999, cantidad : 0},
      {_id: 2 ,nombre:"Smart TV Samsung", img:"../../../assets/image/SmartTVSamsung.png", descripcion:"Smart TV, Crystal Processor 4K,Acceso Remoto, PurColor", precio:152249, cantidad : 0},
      {_id: 3 ,nombre:"Celular Samsung ", img:"../../../assets/image/SamsungZflip.png", descripcion:"Sistema Operativo Android, Almacenamiento: Hasta 1TB, Tipo de red: 5G", precio:372999,cantidad : 0},
      {_id: 3 ,nombre:"Lavarropas Drean ", img:"../../../assets/image/lavarropasdrean.png", descripcion:"Capacidad de lavado: 8kg, Velocidad de Centrifugado: 1200 RPM, Clase: A++", precio:205739,cantidad : 0},
      {_id: 3 ,nombre:"Heladera Drean ", img:"../../../assets/image/heladeraDrean.png", descripcion:"Marca: Drean, Tipo de producto: Heladeras con freezer, Garantía del proveedor:	12", precio:342599,cantidad : 0},
      {_id: 3 ,nombre:"Microsoft XBOX Series X", img:"../../../assets/image/xboxSeriesx.png", descripcion:"Marca: Microsoft, Modelo	SERIES: X 1TB, Garantía del proveedor:	12", precio:246999,cantidad : 0}
    ]
  }
  /**
   * Agregar producto al  carrrito y calcular el total
   * de compra al final de la operacion
   * @param producto 
   */
  public agregarProductos(producto:Producto){
   const prod = this.getProducto(producto._id);
   if(prod!=null){
    prod.cantidad++;
   }else{
    producto.cantidad++;
    this.carrito.push(producto);
   }
   
  }

  /**
   * 
   * @param id Permite obtener un producto del carrito de compras 
   * @returns 
   */
  private getProducto( id : number ) : any {
    return this.carrito.find(p=>{
      return p._id===id;
    })
  }

  /**
   * Resta la cantidad de un producto
   */
  public restar(producto:Producto){
    const o = this.getProducto(producto._id);
    o.cantidad=o.cantidad - 1;
    
    if(o.cantidad<1){
      this.carrito.splice(this.carrito.indexOf(o),1);
    }
  }

  /**
   * 
   * @param producto Suma la cantida de un producto
   */
  public sumar(producto:Producto){
    const o = this.getProducto(producto._id);
    o.cantidad=o.cantidad + 1;
    
  }

  /**
   * 
   * @returns Calcula el total a pagar
   */
  public totalPagar():number{
    this.total=0;
    for(let i=0;i<this.carrito.length;i++){
      this.total=this.total+ (this.carrito[i].cantidad*this.carrito[i].precio);
    }
    return this.total;
  }
}
