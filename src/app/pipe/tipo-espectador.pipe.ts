import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEspectador'
})
export class TipoEspectadorPipe implements PipeTransform {

  transform(tipo:any): string {
    if(tipo==="e"){
      tipo="Extranjero";
    }else{
      tipo="Local"
    }
    return tipo;
  }

}
