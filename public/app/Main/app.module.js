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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var authentication_service_1 = require("../authentication/authentication.service");
var forms_1 = require("@angular/forms");
var home_1 = require("../Home/home");
var create_component_1 = require("../articles/create/create.component");
var list_component_1 = require("../articles/list/list.component");
var view_component_1 = require("../articles/view/view.component");
var edit_component_1 = require("../articles/edit/edit.component");
var authentication_module_1 = require("../authentication/authentication.module");
var material_1 = require("@angular/material");
var articles_module_1 = require("../articles/articles.module");
var account_module_1 = require("../Account/account.module");
var interview_module_1 = require("../articles/create/interview/interview.module");
var Level1_module_1 = require("../articles/create/LevelOne/Level1.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.AppRoutes),
            forms_1.FormsModule,
            authentication_module_1.AuthenticationModule, material_1.MaterialModule, account_module_1.AccountModule, articles_module_1.ArticlesModule, interview_module_1.InterviewAppModule, Level1_module_1.Level1AppModule
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: [
            app_component_1.AppComponent, list_component_1.ListComponent, create_component_1.CreateComponent, edit_component_1.EditComponent, view_component_1.ViewComponent, home_1.HomeComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map