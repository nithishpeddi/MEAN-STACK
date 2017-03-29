import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'account',
    templateUrl: 'app/Account/account.html',
    styleUrls: ['app/Account/account.css']
})
export class AccountComponent {
    user: any;
    constructor(private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }

}