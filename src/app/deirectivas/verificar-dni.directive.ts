import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS} from '@angular/forms';

function verificarDni(c:AbstractControl){
  
  if (c.value == null) return null;
  
  if(/^[0-9 ]*$/.test(c.value) == false){
  
  return {numeroCorrectos: true}
  }

  return null;
 }

@Directive({
  selector: '[dni-correcto]',
  providers:[
  {provide: NG_VALIDATORS, multi: true, useValue:verificarDni}
  ]
})
export class VerificarDniDirective {

  constructor() { }

}
