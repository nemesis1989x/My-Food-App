import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
      this.authService.signinUser(email, password);

    }, 2000);
  }
}
