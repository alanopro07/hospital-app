import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  //se inyecta  DOM del documento se hace referencia a el DOM
  constructor( @Inject(DOCUMENT) private _document,
               public _ajustes: SettingsService) { }

  ngOnInit() {
  }

  cambiaColor(tema: string,link: any) {
    console.log(tema);
    this.aplicarrCheck(link);
    //declaracion del path general del stilo bacticks para template literal
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);
    this._ajustes.ajustes.tema = tema;
    this._ajustes.ajustes.temaUrl = url;

    this._ajustes.guardarAjustes();
  }

  aplicarrCheck( link: any) {
    let selectores = document.getElementsByClassName('selector');

    for ( let ref of selectores )
    {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
