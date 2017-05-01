import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }     from './app.component';
import { Navbar1Component } from './navbar1/navbar1';
import { HomeComponent }    from './home/home';
import { SignupComponent }  from './signup/signup';
import { LoginComponent }   from './login/login';

import { UsersService }     from './services/users.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    Navbar1Component,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}