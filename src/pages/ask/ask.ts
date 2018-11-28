import { Component } from '@angular/core';
import {GoogleLoginComponent} from '../../components/google-login/google-login';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {

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
  question: string;
  explanation: string;

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
    ] 
  }

  ngOnInit()
  {
    this.mData.child("Users").child(this.afAuth.auth.currentUser.uid)
    .child("tags").once("value").then((snapshot)=>{
    this.initTagId = snapshot.val();
    });

    setTimeout(()=> 
    {
      this.techSelect = [];
      this.lmSelect = [];
      if(this.initTagId != null)
      {
        for(let i=0;i<this.initTagId.length;i++)
        {
          for(let j=0;j<this.tech.length;j++)
          {
            if(this.initTagId[i] == this.tech[j].id)
            {
              this.techSelect.push(this.tech[j].id.toString());
            }
          }
        }

        for(let i=0;i<this.initTagId.length;i++)
        {
          for(let j=0;j<this.lm.length;j++)
          {
            if(this.initTagId[i] == this.lm[j].id)
            {
              this.lmSelect.push(this.lm[j].id);
            }
          }
        }
      }
    },500);
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
    console.log('question',this.question);
    console.log('explanation',this.explanation);
    this.flag=false;
    this.presentToast();
    }

  }

  presentToast() 
  {
    const toast = this.toastCtrl.create({
      message: 'Query posted successfully',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

}
