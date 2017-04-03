"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var interview_1 = require("./interview");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var InterviewAppModule = (function () {
    function InterviewAppModule() {
    }
    return InterviewAppModule;
}());
InterviewAppModule = __decorate([
    core_1.NgModule({
        declarations: [
            interview_1.InterviewComponent
        ],
        imports: [router_1.RouterModule, material_1.MaterialModule, forms_1.FormsModule],
    })
], InterviewAppModule);
exports.InterviewAppModule = InterviewAppModule;
//# sourceMappingURL=interview.module.js.map