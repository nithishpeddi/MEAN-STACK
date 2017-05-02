"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Level1_1 = require("./Level1");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var Level1AppModule = (function () {
    function Level1AppModule() {
    }
    return Level1AppModule;
}());
Level1AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            Level1_1.Level1Component
        ],
        imports: [router_1.RouterModule, material_1.MaterialModule, forms_1.FormsModule, common_1.CommonModule, material_2.MdIconModule, material_3.MdButtonModule],
    })
], Level1AppModule);
exports.Level1AppModule = Level1AppModule;
//# sourceMappingURL=Level1.module.js.map