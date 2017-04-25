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
var router_1 = require("@angular/router");
var articles_service_1 = require("../articles.service");
var material_1 = require("@angular/material");
var dialog_result_example_result_1 = require("./dialog-result-example-result");
require("rxjs/add/operator/startWith");
var CreateComponent = (function () {
    function CreateComponent(_router, _articlesService, dialog) {
        this._router = _router;
        this._articlesService = _articlesService;
        this.dialog = dialog;
        this.article = {};
        this.options = [
            { value: 'Good', description: 'Good' },
            { value: 'Extrodinary', description: 'Extrodinary' },
            { value: 'SuperStar', description: 'SuperStar' }
        ];
    }
    CreateComponent.prototype.create = function () {
        var _this = this;
        this._articlesService
            .create(this.article)
            .subscribe(function (createdArticle) { return _this._router.navigate(["/articles/view/" + createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    CreateComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_result_example_result_1.DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.article.selectedOption = result;
            console.log('article.selectedOption', _this.article.selectedOption);
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: './create.template.html',
        styleUrls: ['./create.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, articles_service_1.ArticlesService, material_1.MdDialog])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map