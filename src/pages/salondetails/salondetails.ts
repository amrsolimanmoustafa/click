import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Servicedetails} from "../servicedetails/servicedetails";

@Component({
  selector: 'page-salondetails',
  templateUrl: 'salondetails.html',
})
export class Salondetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Salondetails');
  }
  servicedetail(){
    this.navCtrl.push(Servicedetails);
  }

}
