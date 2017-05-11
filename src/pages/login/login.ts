import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Signup} from "../signup/signup";
import {Activation} from "../activation/activation";
import {Editaccount} from "../editaccount/editaccount";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
 
  gosign(){
    this.navCtrl.push(Signup);
  }

   goactive(){
    this.navCtrl.push(Activation);
  }
  gotoedit(){
    this.navCtrl.push(Editaccount);
  }

 showPrompt() {
    let prompt = this.alertCtrl.create({
      message: " لاسترجاع كلمه المرور برجاء ادخال البريد الالكترونى",
      inputs: [
        {
          name: 'email',
          placeholder: 'البريد الاليكترونى'
        },
      ],
      buttons: [
        {
          text: 'موافق',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
