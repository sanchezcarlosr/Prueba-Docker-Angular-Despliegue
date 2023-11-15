import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS} from '@angular/forms';

function verificarPrecio(c:AbstractControl){
  
  if (c.value == null) return null;
  
  if((c.value>=100) == false){
  
  return {precioCorrectos: true}
  }

  return null;
 }
@Directive({
  selector: '[verificar-Precio]',
  providers:[
  {provide: NG_VALIDATORS, multi: true, useValue:verificarPrecio}
  ]
})
export class VerificarPrecioDirective {

  constructor() { }

}
