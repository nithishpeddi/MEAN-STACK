import { Component, Input } from '@angular/core';
import { UserService } from '../Contact/user.service';
import { Hero,HEROES } from './hero';
@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})
export class HomeComponent {
    user = '';
    constructor(userService: UserService) {
        this.user = userService.userName;
    }
    Date = new Date();
    toggle = true;


    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }


    title = 'Tour of Heroes';

    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}






