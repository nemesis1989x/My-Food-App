import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'My Food Store';
  appName = 'Fooderoo';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA1HrVkAkqreqP0K8W6QzcTCgjYqm07Iac',
      authDomain: 'fooderoo-e083e.firebaseapp.com'
    });
  }
}
