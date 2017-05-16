import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Orderinfo} from "../orderinfo/orderinfo";


@Component({
  selector: 'page-choosingservices',
  templateUrl: 'choosingservices.html',
})
export class Choosingservices {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Choosingservices');
  }

  orderinfo(){
    this.navCtrl.push(Orderinfo);
  }

}
