import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'

  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }


  cargarAjustes() {
    if ( localStorage.getItem('ajustes'))
    {
      this.ajustes =  JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del localstorage');
      this.aplicarTema( this.ajustes.tema );
    } else {
      console.log('Usando valores por defecto');

    }
  }

  aplicarTema( tema: string ){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  guardarAjustes() {
    console.log('Guardado en el localstorage');
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }
}
interface Ajustes {

    temaUrl: string;
    tema: string;

}

