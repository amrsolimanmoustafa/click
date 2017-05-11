import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {Aboutclick} from "../pages/aboutclick/aboutclick";
import {Activation} from "../pages/activation/activation";
import {Appointment} from "../pages/appointment/appointment";
import {Cashing} from "../pages/cashing/cashing";
import {Choosingservices} from "../pages/choosingservices/choosingservices";
import {Contactus} from "../pages/contactus/contactus";
import {Copon} from "../pages/copon/copon";
import {Editaccount} from "../pages/editaccount/editaccount";
import {Lang} from "../pages/lang/lang";
import {Login} from "../pages/login/login";
import {Map} from "../pages/map/map";
import {Notification} from "../pages/notification/notification";
import {Orderinfo} from "../pages/orderinfo/orderinfo";
import {Salondetails} from "../pages/salondetails/salondetails";
import {Servicedetails} from "../pages/servicedetails/servicedetails";
import {Signup} from "../pages/signup/signup";
import {Usertype} from "../pages/usertype/usertype";


import { MyApp } from './app.component';
import { Home} from '../pages/home/home';
import {Favorites} from "../pages/favorites/favorites";
@NgModule({ 
  declarations: [
    MyApp,
    Home,
    Aboutclick,
    Activation,
    Appointment,
    Cashing,
    Choosingservices,
    Contactus,
    Copon, 
    Editaccount,
    Lang, 
    Login,
    Map,
    Notification,
    Orderinfo,
    Salondetails,
    Servicedetails,
    Signup,
    Usertype,
    Favorites

    
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Aboutclick,
    Activation,
    Appointment,
    Cashing,
    Choosingservices,
    Contactus,
    Copon, 
    Editaccount,
    Lang, 
    Login,
    Map,
    Notification,
    Orderinfo,
    Salondetails,
    Servicedetails,
    Signup,
    Usertype,
    Favorites
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
