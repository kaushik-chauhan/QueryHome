import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {GoogleLoginComponent} from '../../components/google-login/google-login';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user: Observable<firebase.User>;
  mData : DatabaseReference = firebase.database().ref();
  public dname:string;
  tech:any;
  buss:any;
  lm:any;
  tech_disp:any = [];
  buss_disp:any = [];
  lm_disp:any = [];
  techSelect:any = [] ;
  bussSelect:any = [];
  totalTag:any = [];
  initTag:any = [];
  initTagId:any = [];
  lmSelect:any = [];
  flag:boolean = false;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,
              public toastCtrl: ToastController,
              private platform: Platform,
              private gplus: GooglePlus){
    this.dname = this.afAuth.auth.currentUser.displayName;
    this.tech = {
      "5": ".NET",
      "6": "Angular",
      "7": "Couchbase",
      "8": "SQL Server",
      "9": "Elastic Search",
      "10": "Docker",
      "11": "RabbitMQ"
    };
    this.lm = {
      "1_a": "Order Management",
      "1_b": "Route Management",
      "1_c": "Account Management",
      "1_d": "Claims Management",
      "1_e": "Zone Management",
      "1_f": "Location Management",
      "1_g": "User Management",
      "1_h": "Facility Management"
    };
    this.tech_disp = [
      {id:"5", name: ".NET"},
      {id:"6", name: "Angular"},
      {id:"7", name: "Couchbase"},
      {id:"8", name: "SQL Server"},
      {id:"9", name: "Elastic Search"},
      {id:"10", name: "Docker"},
      {id:"11", name: "RabbitMQ"},
    ];
    this.lm_disp = [
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

  ngOnInit()
  {
    this.mData.child("users").child(this.afAuth.auth.currentUser.uid)
    .child("tags").once("value").then((snapshot)=>{
    this.initTagId = snapshot.val();
    });

    setTimeout(()=> 
    {
      this.techSelect = [];
      this.lmSelect = [];
      if (this.initTagId != null)
      {
        for (let i=0;i<this.initTagId.length;i++) {
          if (isNaN(this.initTagId[i])) {
            if (this.lm[this.initTagId[i]] != null)
              this.lmSelect.push(this.initTagId[i].toString());
          } else {
              if (this.tech[this.initTagId[i]] != null)
                this.techSelect.push(this.initTagId[i].toString());
          }
        }
        if(this.techSelect == null)
          this.initTagId = this.lmSelect;
        else if(this.lmSelect == null)
          this.initTagId = this.techSelect;
        else
          this.initTagId = this.techSelect.concat(this.lmSelect);
      }
    },500);
  }
  
  enable()
  {
    this.flag=true;
  }

  saveChanges()
  {
    if(this.techSelect == null)
      this.totalTag = this.lmSelect;
    else if(this.lmSelect == null)
      this.totalTag = this.techSelect;
    else
      this.totalTag = this.techSelect.concat(this.lmSelect);
          
    for (var i in this.totalTag)
    {
      if (this.initTagId == null)
      {
        this.mData.child("tag_user").child(this.totalTag[i]).child(this.afAuth.auth.currentUser.uid).set(true);
      }
      else if (!(this.initTagId.includes(this.totalTag[i])))
      {
        this.mData.child("tag_user").child(this.totalTag[i]).child(this.afAuth.auth.currentUser.uid).set(true);
      }
    }

    for (var i in this.initTagId)
    {
      if (this.totalTag == null)
      {
        this.mData.child("tag_user").child(this.initTagId[i]).child(this.afAuth.auth.currentUser.uid).set(null);
      }
      else if (!(this.totalTag.includes(this.initTagId[i])))
      {
        this.mData.child("tag_user").child(this.initTagId[i]).child(this.afAuth.auth.currentUser.uid).set(null);
      }
    }

    this.mData.child("users").child(this.afAuth.auth.currentUser.uid)
    .child("tags").set(this.totalTag);
    this.flag=false;

    this.initTagId = this.totalTag;
    this.presentToast();
  }

  presentToast() 
  {
    const toast = this.toastCtrl.create({
      message: 'Tags updated successfully',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  signOut() {
    this.afAuth.auth.signOut();
    if(this.platform.is('cordova')){
      this.gplus.logout();
    }
    const toast = this.toastCtrl.create({
      message: 'You are signed out',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.setRoot(LoginPage);
  }
}
