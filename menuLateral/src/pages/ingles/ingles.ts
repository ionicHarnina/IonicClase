import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the InglesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingles',
  templateUrl: 'ingles.html',
})
export class InglesPage {

  public usuario={username:'',password:''};
  userCreated = false;
  testRadioOpen=false;
  testRadioResult:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InglesPage');
  }

  //basic alert
  presentAlert() {
    //se crea
    let myAlert = this.alertCtrl.create(
      {
        title: 'Mi alerta',
        subTitle: 'estoy preocupado porque no se si vamos a acabar a tiempo',
        buttons: ['descartar']
      }
    );
    //se visualiza
    myAlert.present();
  }
  //confirm alert
  confirmation = false;
  presentAlertConfirmation() {
    let myconfirm = this.alertCtrl.create(
      {
        title: 'confirmacion',
        message: 'Quieres confirmar esto',
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            handler: () => { console.log("cancelado") }
          },
          {
            text: 'confirma',
            handler: () => { this.confirmation = true }
          }
        ]
      }
    ).present();
  }
  //promt alert
  presentAlertPrompt() {
    let myAlert = this.alertCtrl.create(
      {
        title: 'Login',
        inputs: [
          {
            name: 'user',
            placeholder: 'username'
          }, {
            name: 'Password',
            placeholder: 'password',
            type: 'password'
          }
        ],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'login',
          handler: data => {
            console.log(data);
            // console.log(data.password);
            this.usuario.username = data.user;
            this.usuario.password = data.Password;
            this.userCreated=true;
          }
        }]
      }
    );
    //se visualiza
    myAlert.present();
  }
  //checkbox alert
  presentCheckAlert() {
    //se crea
    let myAlert = this.alertCtrl.create(
      {
        title: 'Chequear',
        inputs: [{
          name:'uno',
          type:'checkbox',
          label:'aprieta aqui',
          handler:data=>{console.log("apretado"+ data.checked)}
        }]
      }
    );
    //se visualiza
    myAlert.present();
  }
  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
}
}
