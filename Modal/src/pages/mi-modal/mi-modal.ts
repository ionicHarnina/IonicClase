import { Persona } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the MiModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-modal',
  templateUrl: 'mi-modal.html',
})
export class MiModalPage {
  saludo: string;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    //Para obtener los elementos qie vienen del llamador al modal
    //tengo que coger los navparams del viewController
    this.saludo = this.viewCtrl.getNavParams().get('hola');
  }
  //los datos creados se pueden enviar en el dismiss
  //sirve para preguntar algo concreto o lo que sea
    dismiss() {
    let persona=new  Persona("luis",23);
    //enviamos la informacion al llamador a traves viewCtrl
    this.viewCtrl.dismiss(persona);
  }

}
