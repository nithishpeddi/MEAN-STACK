"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../Contact/user.service");
var hero_1 = require("./hero");
var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.user = '';
        this.Date = new Date();
        this.toggle = true;
        this.title = 'Tour of Heroes';
        this.heroes = hero_1.HEROES;
        this.user = userService.userName;
    }
    Object.defineProperty(HomeComponent.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    HomeComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.html',
        styleUrls: ['./home.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map