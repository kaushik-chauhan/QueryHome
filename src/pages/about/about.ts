import { Component } from '@angular/core';
import {GoogleLoginComponent} from '../../components/google-login/google-login';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public user: Observable<firebase.User>;
  mData : DatabaseReference = firebase.database().ref();
  public dname:string;
  tech:any = [];
  buss:any = [];
  lm:any = [];
  techSelect:any = [] ;
  bussSelect:any = [];
  totalTag:any = [];
  initTag:any = [];
  initTagId:any = [];
  lmSelect:any = [];
  flag:boolean = false;
  query = {
    question: null,
    explanation: null
  };

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,
              public toastCtrl: ToastController) {
    this.dname = this.afAuth.auth.currentUser.displayName;
    this.tech = [
      {id:"5", name: ".NET"},
      {id:"6", name: "Angular"},
      {id:"7", name: "Couchbase"},
      {id:"8", name: "SQL Server"},
      {id:"9", name: "Elastic Search"},
      {id:"10", name: "Docker"},
      {id:"11", name: "RabbitMQ"},
    ];
    this.lm = [
      {id:"1_a", name: "Order Management"},
      {id:"1_b", name: "Route Management"},
      {id:"1_c", name: "Account Management"},
      {id:"1_d", name: "Claims Management"},
      {id:"1_e", name: " Zone Management"},
      {id:"1_f", name: " Location Management"},
      {id:"1_g", name: " User Management"},
      {id:"1_h", name: " Facility Management"}
    ]; 
  }

  enable()
  {
    this.flag=true;
  }

  saveChanges()
  {
    if(this.lmSelect == null || this.lmSelect.length == 0)
    {
      const toast = this.toastCtrl.create({
        message: 'Please select atleast one business tag',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
    else {
    this.totalTag = this.techSelect.concat(this.lmSelect);
    console.log('tags', this.totalTag);
    console.log('query',this.query);
    this.flag=false;
    this.presentToast();
    }

  }

  presentToast() 
  {
    const toast = this.toastCtrl.create({
      message: 'Query posted successfully',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

}