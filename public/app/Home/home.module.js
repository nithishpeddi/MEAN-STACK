"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var home_1 = require("../Home/home");
var user_service_1 = require("../Contact/user.service");
var contact_component_1 = require("../Contact/contact.component");
var contact_service_1 = require("../Contact/contact.service");
var awesome_pipe_1 = require("../Contact/awesome.pipe");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, material_1.MaterialModule],
        declarations: [
            home_1.HomeComponent,
            awesome_pipe_1.AwesomePipe, contact_component_1.ContactComponent,
        ],
        providers: [contact_service_1.ContactService, user_service_1.UserService],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map