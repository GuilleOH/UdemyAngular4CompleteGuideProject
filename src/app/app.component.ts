import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB7GtFuYtItbSQJtPn72XBvHQU7sHM_YT4",
      authDomain: "ng-recipe-booki-4430a.firebaseapp.com",
    });
  }

}
