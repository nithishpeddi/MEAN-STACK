import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'signin',
    templateUrl: './signin.template.html',
    styleUrls: ['./signin.css']
})
export class SigninComponent {
    errorMessage: string;
    credentials: any = {};
    constructor(private _authenticationService: AuthenticationService, private _router: Router) { }
    signin() {
        this._authenticationService.signin(this.credentials).subscribe(result =>
            this._router.navigate(['/articles']),
            error => this.errorMessage = error);
    }

}