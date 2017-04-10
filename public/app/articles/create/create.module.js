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
var material_1 = require("@angular/material");
var create_component_1 = require("../create/create.component");
var interview_module_1 = require("../create/interview/interview.module");
var router_1 = require("@angular/router");
var Level1_module_1 = require("../create/LevelOne/Level1.module");
var forms_2 = require("@angular/forms");
var InterviewModule = (function () {
    function InterviewModule() {
    }
    return InterviewModule;
}());
InterviewModule = __decorate([
    core_1.NgModule({
        declarations: [create_component_1.CreateComponent],
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, material_1.MaterialModule, interview_module_1.InterviewAppModule, Level1_module_1.Level1AppModule, forms_2.ReactiveFormsModule]
    })
], InterviewModule);
exports.InterviewModule = InterviewModule;
//# sourceMappingURL=create.module.js.map