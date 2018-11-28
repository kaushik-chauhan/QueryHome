import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoogleLoginComponent} from '../../components/google-login/google-login';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,
              public toastCtrl: ToastController){
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
    this.totalTag = this.techSelect.concat(this.lmSelect);
    console.log("tt",this.totalTag);
    this.mData.child("Users").child(this.afAuth.auth.currentUser.uid)
    .child("tags").set(this.totalTag);
    this.flag=false;
    this.presentToast();
  }

  presentToast() 
  {
    const toast = this.toastCtrl.create({
      message: 'Tags updated successfully',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
