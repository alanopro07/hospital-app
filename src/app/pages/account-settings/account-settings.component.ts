import {Component, Inject, OnInit} from '@angular/core';
import {SettingsService} from "../../services/service.index";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  //se inyecta  DOM del documento se hace referencia a el DOM
  constructor(
               public _ajustes: SettingsService) { }

  ngOnInit() {
  }

  cambiaColor(tema: string,link: any) {
    console.log(tema);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema );
    //declaracion del path general del stilo bacticks para template literal

  }

  aplicarCheck( link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores )
    {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
