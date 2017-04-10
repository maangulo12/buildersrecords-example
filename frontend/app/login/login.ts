import { Component } from '@angular/core';

import { LoginForm } from './login.form';

@Component({
  moduleId: module.id,
  selector: 'login-component',
  templateUrl: 'login.html'
})
export class LoginComponent {

  user = new LoginForm('', '');
  submitted = false;

  newLogin() {
     this.user = new LoginForm('', '');
  }

  onSubmit() {
    this.submitted = true;
  }

  // Remove this when finished
  get diagnostic() { 
    return JSON.stringify(this.user); 
  }

}