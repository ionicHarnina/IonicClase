import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NuevaRootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-root',
  templateUrl: 'nueva-root.html',
})
export class NuevaRootPage {
  public anterior:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.anterior=this.navParams.get('patras');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaRootPage');
  }
  patras(){
    this.navCtrl.push(this.anterior);
  }
}
