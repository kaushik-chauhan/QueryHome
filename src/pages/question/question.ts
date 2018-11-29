import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { DatabaseReference } from '@angular/fire/database/interfaces';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  question: any;
  answers: any = [];
  user: any = null;
  mData : DatabaseReference = firebase.database().ref();
  answer = {
    content: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth) {
  }

  ngOnInit() {
    this.answers = [];
    this.question = this.navParams.get('qid');
    for (var i in this.question.answers)
    {
      this.answers.push(this.question.answers[i])
    }
    this.user = this.afauth.auth.currentUser;
  }

  send() {
    if (this.answer.content != "") {
      var ts = new Date().toISOString();
      ts = ts.replace(/[^0-9]/g, "");
      this.mData.child("questions").child(this.question.id).child("answers").child(ts).child("timestamp").set(ts);
      this.mData.child("questions").child(this.question.id).child("answers").child(ts).child("user").set(this.user.uid);
      this.mData.child("questions").child(this.question.id).child("answers").child(ts).child("name").set(this.user.displayName);
      this.mData.child("questions").child(this.question.id).child("answers").child(ts).child("answer").set(this.answer.content);
      this.mData.child("questions").child(this.question.id).child("flag_answered").set("true");
      this.answer.content="";
      this.refresh();
    }
  }

  refresh() {
    this.mData.child("questions").child(this.question.id).child("answers").once("value").then((snapshot)=>{  
      var temp = snapshot.val();
      this.answers = [];
      for (var i in temp)
      {
        this.answers.push(temp[i]);
      }
    });
  }
}
