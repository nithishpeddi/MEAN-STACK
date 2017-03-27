import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.template.html',
    styleUrls:['home.component.css']
})
export class HomeComponent {
     user: any;
     constructor(private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
     }
}