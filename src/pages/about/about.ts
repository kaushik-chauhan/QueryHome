import { Component } from '@angular/core';
import {GoogleLoginComponent} from '../../components/google-login/google-login';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

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
      {id:"1_e", name: "Zone Management"},
      {id:"1_f", name: "Location Management"},
      {id:"1_g", name: "User Management"},
      {id:"1_h", name: "Facility Management"},
      {id:"4", name:"General"}
    ]; 
  }

  saveChanges()
  {
    if(this.lmSelect == null || this.lmSelect.length == 0)
    {
      const toast = this.toastCtrl.create({
        message: 'Please select atleast one business tag',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
    else {
      if(this.techSelect == null)
        this.totalTag = this.lmSelect;
      else if(this.lmSelect == null)
        this.totalTag = this.techSelect;
      else
        this.totalTag = this.techSelect.concat(this.lmSelect);
      var ts = new Date().toISOString();
      ts = ts.replace(/[^0-9]/g, "");
      this.mData.child("questions").child(ts).child("id").set(ts);
      this.mData.child("questions").child(ts).child("tags").set(this.totalTag);
      this.mData.child("questions").child(ts).child('question').set(this.query.question);
      this.mData.child("questions").child(ts).child('explanation').set(this.query.explanation);
      this.mData.child("questions").child(ts).child('last_timestamp').set(ts);
      this.mData.child("questions").child(ts).child('flag_answered').set('false');
      this.mData.child("questions").child(ts).child("asked_by").child('user').set(this.afAuth.auth.currentUser.uid);
      this.mData.child("questions").child(ts).child("asked_by").child('timestamp').set(ts);
      this.mData.child("questions").child(ts).child("asked_by").child('name').set(this.afAuth.auth.currentUser.displayName);
      this.mData.child("users").child(this.afAuth.auth.currentUser.uid).child("asked").push(ts);
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
    this.navCtrl.setRoot(TabsPage);
  }

}