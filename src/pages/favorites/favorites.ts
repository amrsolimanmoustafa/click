import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Salondetails} from "../salondetails/salondetails";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorites');
  }
details(){
  this.navCtrl.push(Salondetails);
}
}
