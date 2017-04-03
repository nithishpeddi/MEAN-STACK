import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
})
export class HomeComponent {
    birthday = new Date(); // April 15, 1988
    toggle = true;
    // shortDate = true;

    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }


}