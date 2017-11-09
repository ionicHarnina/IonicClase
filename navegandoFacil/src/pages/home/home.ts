import { SegundaPage } from './../segunda/segunda';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openSegundaPage():void{
    this.navCtrl.push(SegundaPage)
  }
}
