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
var ListComponent = (function () {
    function ListComponent(_router, _articlesService) {
        this._router = _router;
        this._articlesService = _articlesService;
    }
    ListComponent.prototype.returnToArticle = function (id) {
        this._router.navigate(["/articles/view/" + id]);
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articlesService.list().subscribe(function (articles) { return _this.articles = articles; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/articles/list/list.template.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        articles_service_1.ArticlesService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map