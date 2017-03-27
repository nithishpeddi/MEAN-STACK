"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var articles_component_1 = require("./articles.component");
var create_component_1 = require("./create/create.component");
var list_component_1 = require("./list/list.component");
var view_component_1 = require("./view/view.component");
var edit_component_1 = require("./edit/edit.component");
var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    return ArticlesModule;
}());
ArticlesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        declarations: [
            articles_component_1.ArticlesComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            view_component_1.ViewComponent,
            edit_component_1.EditComponent
        ]
    })
], ArticlesModule);
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map