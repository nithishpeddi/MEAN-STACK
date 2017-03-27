import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from '../authentication/signin/signin.component';
import { SignupComponent } from '../authentication/signup/signup.component';
export const AuthenticationRoutes: Routes = [{
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
    ],
}];