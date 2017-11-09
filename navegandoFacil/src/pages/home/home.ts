import { SegundaPage, Persona } from './../segunda/segunda';
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
    //una forma simple de navegar tratando como una pila
    //de pages el NAvController
    //ahora vamos a pasar informacion a la page llamada
    //añadir en la llamada al push la info que queremos pasar
    //necesitamos eqtiquetar el dato que se pasa
    // this.navCtrl.push(SegundaPage,{eti:12});
    //como se recoge
    let persona=new Persona("Luis",23);
    let personaDos=new Persona("Edelmiro",23);
    //comentamos el push anterior para probar esto
    //siempre hay que acompañar el dato con una etiqueta
    this.navCtrl.push(SegundaPage,{personilla:persona,laotra:personaDos});

  }
}
