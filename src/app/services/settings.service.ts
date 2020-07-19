import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'defaul'

  };

  constructor() {}
  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes'))
    {
      this.ajustes =  JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del localstorage');
    } else {
      console.log('Usando valores por defecto');

    }
  }

  guardarAjustes() {
    console.log('Guardado en el localstorage');
    localStorage.setItem('ajuste',JSON.stringify(this.ajustes));
  }
}
interface Ajustes {

    temaUrl: string;
    tema: string;

}

