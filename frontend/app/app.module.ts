import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }      from './app.component';
import { Navbar1Component }  from './navbar1/navbar1';
import { HomeComponent }     from './home/home';
import { LoginComponent }    from './login/login';
import { SignupComponent }   from './signup/signup';
import { ProjectsComponent } from './projects/projects';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    Navbar1Component,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProjectsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}