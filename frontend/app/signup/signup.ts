import { Component } from '@angular/core';

import { SignupForm } from './signup.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'signup-component',
  templateUrl: 'signup.html'
})
export class SignupComponent {

  user = new SignupForm('', '', '');
  submitted = false;

  constructor(private usersService: UsersService) {}

  onSubmit(formData: SignupForm) {
    this.submitted = true;
    console.log(formData);
    this.usersService.addUser(formData).subscribe(data => {
      console.log(data);
    });    
  }
}