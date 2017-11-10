import { ApatitaPage } from './../apatita/apatita';
import { AmotoPage } from './../amoto/amoto';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CochePage } from '../coche/coche';
import { GuaguaPage } from '../guagua/guagua';

/**
 * Generated class for the MiTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-tab',
  templateUrl: 'mi-tab.html'
})
export class MiTabPage {

  //es una Array donde declaro los elmento por portotipado
  public pages: Array<{ title: string, componente: any, icono: any,mostrar:boolean }>;
  // public pagesJava: Array<{ Pagina }>;
  // cocheRoot = 'CochePage'
  // amotoRoot = 'AmotoPage'
  // guaguaRoot = 'GuaguaPage'
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Automovil', componente: CochePage, icono: 'car',mostrar:true},
      { title: 'Motocicleta', componente: AmotoPage, icono: 'bicycle',mostrar:true},
      { title: 'Autobus', componente: GuaguaPage, icono: 'bus',mostrar:false},
      { title: 'A pie', componente: ApatitaPage, icono: 'walk',mostrar:true}
    ];
  }

}
export class Pagina {
  constructor(public title: string, public componente: any, public icono: any) { }
}
