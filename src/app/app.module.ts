import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {GooglePlus} from '@ionic-native/google-plus';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { QuestionPage } from '../pages/question/question';

import {GoogleLoginComponent} from '../components/google-login/google-login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceivedPage } from '../pages/received/received';

const firebaseConfig = {
  apiKey: "AIzaSyAzXJj9P4jtNwLaLtNtAfUOnfyBlHyFaT4",
  authDomain: "test-app-base.firebaseapp.com",
  databaseURL: "https://test-app-base.firebaseio.com",
  projectId: "test-app-base",
  storageBucket: "test-app-base.appspot.com",
  messagingSenderId: "1006688015933"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    QuestionPage,
    ReceivedPage,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    QuestionPage,
    ReceivedPage,
    GoogleLoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
