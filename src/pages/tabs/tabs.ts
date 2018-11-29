import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController, Tabs } from 'ionic-angular';
import { ReceivedPage } from '../received/received';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;  
  tab2Root = ContactPage;
  tab3Root = ReceivedPage;

  constructor(public navCtrl: NavController) {

  }
}
