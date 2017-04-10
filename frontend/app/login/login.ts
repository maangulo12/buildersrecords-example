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

  onSubmit(value: any) {
    this.submitted = true;

    console.log(value);
  }

}