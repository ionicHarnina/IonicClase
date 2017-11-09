import { MiModalPage } from './../mi-modal/mi-modal';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public persona:Persona;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  //vamos a convertir la pagina en modal
  showModal() {
    //creamos la pagina modal
    let profileModal = this.modalCtrl.create(MiModalPage,{hola:"hola"});
    //presentar quiere decir que se enseñe
    profileModal.present();
    //un callback o hook que hace algo cuando se produce el dismiss
    profileModal.onDidDismiss((data)=>{this.persona=data})
  }

}
export class Persona{
  constructor(public name:string,public age:number){}
}

