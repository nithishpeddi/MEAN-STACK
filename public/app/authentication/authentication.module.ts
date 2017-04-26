import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MdInputModule} from '@angular/material';
@NgModule({
    imports: [
        FormsModule,MdInputModule,
        RouterModule.forChild(AuthenticationRoutes),
    ],
    declarations: [
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
    ]
})
export class AuthenticationModule { }