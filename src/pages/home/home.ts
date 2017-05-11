import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Salondetails} from "../salondetails/salondetails"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }
details(){
  this.navCtrl.push(Salondetails);
}
}
