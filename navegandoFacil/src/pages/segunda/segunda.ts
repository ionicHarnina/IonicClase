import { NuevaRootPage } from './../nueva-root/nueva-root';
import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {

  public recogida:number;
  public person:Persona;
  public personD:Persona;

  constructor(public navCtrl: NavController,public NavParams:NavParams) {
    // this.recogida=this.NavParams.get('eti');
    this.person=this.NavParams.get('personilla');
    this.personD=this.NavParams.get('laotra');
  }

  openNuevaRoot(){
    //esto cera una nueva raiz y borra la pila de navegacion
    //hay que ver esto
    this.navCtrl.setRoot(NuevaRootPage,{patras:this});
  }
  volverAtras(){
    this.navCtrl.pop();
  }
}
//la exportacion de clases no se debe subir a los modules
//al parecer hay que hacer una importacion alli donde se use
export class Persona{
  constructor(public nombre:string,public edad:number){}
}
