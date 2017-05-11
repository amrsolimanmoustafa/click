import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Usertype} from "../usertype/usertype";
import {Favorites} from "../favorites/favorites";
import {Activation} from "../activation/activation";
import {Appointment} from "../appointment/appointment";
import {Cashing} from "../cashing/cashing";
import {Copon} from "../copon/copon";
import {Notification} from "../notification/notification";




 


@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html',
})
export class Lang {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lang');
  }
    
  gouser(){
    this.navCtrl.push(Usertype);
  }
  favorite(){
    this.navCtrl.push(Favorites);
  }
  active(){
      this.navCtrl.push(Activation);
  }
  appoit(){
       this.navCtrl.push(Appointment);
  }
  cash(){
       this.navCtrl.push(Cashing);
  }
  
  copon(){
       this.navCtrl.push(Copon);
  }
  notif(){
       this.navCtrl.push(Notification);
  } 
 
}
