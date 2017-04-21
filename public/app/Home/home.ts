import { Component, Input } from '@angular/core';
import { UserService } from '../Contact/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})
export class HomeComponent {
    // @Input() subtitle = '';
    // title = 'Angular Modules';
    user = '';
    constructor(userService: UserService) {
        this.user = userService.userName;
    }
    Date = new Date();
    toggle = true;


    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }


}






