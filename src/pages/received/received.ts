import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-received',
  templateUrl: 'received.html',
})
export class ReceivedPage {

  public user: firebase.User;
  mData : DatabaseReference = firebase.database().ref();
  tech: any = [];
  lm: any = [];
  received: any;
  questions: any = [];

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
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
      {id:"1_h", name: "Facility Management"}
    ]; 
  }

  ionViewWillEnter() {
    this.questions = [];
    this.user = this.afAuth.auth.currentUser;
    this.mData.child("users").child(this.user.uid).child("received").once("value").then((snapshot)=>{
      this.received = snapshot.val();
      for (var i in this.received)
      {
        this.mData.child("questions").child(this.received[i.toString()]).once("value").then((snapshot)=>{
          this.questions.push(snapshot.val());
        });
      }
    });
  }

  redirect(qid) {
    this.navCtrl.push(QuestionPage,{
      qid: qid,
    });
  }

  ask() {
    this.navCtrl.push(AboutPage);
  }
}
