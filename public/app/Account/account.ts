import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'account',
    templateUrl: './account.html',
    styleUrls: ['./account.css']
})
export class AccountComponent {

    user: any;
    constructor(private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }

    signout() {
        console.log('signout')
        this._authenticationService.signout().subscribe();

    }
}