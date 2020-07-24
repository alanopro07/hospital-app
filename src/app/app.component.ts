import { Component } from '@angular/core';

//se simplifica en un solo archivo
import {SettingsService} from "./services/service.index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( public _ajustes: SettingsService) {


  }
}
