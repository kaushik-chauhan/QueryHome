import { Component } from '@angular/core';

//import * as firebase from 'firebase/app';
import * as firebase from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform, LoadingController } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs'
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';


/**
 * Generated class for the GoogleLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  public user: Observable<firebase.User>;
  us : any;
  mData : DatabaseReference = firebase.database().ref();
  text: string;
  anOtherPage: TabsPage;
  Uname:any = null;
  testing:any;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    private gplus: GooglePlus,
    public loadingCtrl: LoadingController,
    private platform: Platform) {
    this.text = 'Hello World';
    this.user = this.afAuth.authState;
    //if(this.user != null){
     //this.Uname = this.afAuth.auth.currentUser.displayName;
    //}
  }

  ngOnInit(){
    
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present()
    setTimeout(()=>{
    if(this.afAuth.auth.currentUser != null)
    this.goAnOtherPage();
    loading.dismiss();
    },3000);
    
  }
  
  goAnOtherPage() {
    this.navCtrl.setRoot(TabsPage);
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
      //this.afAuth.authState
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '314946282716-6hv1nmv4a8gcntnh0cl72a51mctoqkqh.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
  
      const credential = await this.afAuth.auth.signInAndRetrieveDataWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
        ).then((result)=> {
          //console.log(this.afAuth.auth.currentUser.uid);
          if(result.additionalUserInfo.isNewUser)
          {
            this.us = {
                uid : this.afAuth.auth.currentUser.getIdToken(),
                name : this.afAuth.auth.currentUser.displayName
            };
            
            this.mData.child("users").child(this.afAuth.auth.currentUser.uid).child("name").set(this.afAuth.auth.currentUser.displayName);
           // this.db.list('Users').push(this.site);
          }
          this.goAnOtherPage();
        });
  
    } catch(err) {
      console.log(err)
    }
  }


  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider)
      .then((result)=> {
        //console.log(this.afAuth.auth.currentUser.uid);
        if(result.additionalUserInfo.isNewUser)
        {
          this.us = {
              uid : this.afAuth.auth.currentUser.getIdToken(),
              name : this.afAuth.auth.currentUser.displayName
          };
          
          this.mData.child("users").child(this.afAuth.auth.currentUser.uid).child("name").set(this.afAuth.auth.currentUser.displayName)
         // this.db.list('Users').push(this.site);
        }
        this.goAnOtherPage();
      });
  
    } catch(err) {
      console.log(err)
    }
  
  }

}
