import { Component } from '@angular/core';

import { LoginForm } from './login.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'login-component',
  templateUrl: 'login.html'
})
export class LoginComponent {

  user = new LoginForm('', '');
  submitted = false;

  constructor(private usersService: UsersService) {}

  onSubmit(value: any) {
    this.submitted = true;   
    console.log(value);
  }

}