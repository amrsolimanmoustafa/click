import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Choosingservices} from "../choosingservices/choosingservices";

@Component({
  selector: 'page-servicedetails',
  templateUrl: 'servicedetails.html',
})
export class Servicedetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Servicedetails');
  }
 gochose(){
      this.navCtrl.push(Choosingservices);
 }
}
