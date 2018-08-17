import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  greetUser = '';
  wrongInput = '';
  showSpinner = false;

  enteredUsername = '';
  enteredPassword = '';

  private password = 'mypass';
  public username = 'myuser';

  constructor() { }

  ngOnInit() {
  }

  validateUser() {

    this.showSpinner = true;

    setTimeout(() => {
      if (this.enteredUsername === this.username && this.enteredPassword === this.password){
        this.greetUser = this.enteredUsername;
        this.showSpinner = false;
      } else {
        this.showSpinner = false;
        this.wrongInput = 'Wrong Input!';
      }
    }, 2000);
  }
}
