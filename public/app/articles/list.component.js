System.register(["@angular/core", "../articles.service"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, articles_service_1, ListComponent, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }
        ],
        execute: function () {
            ListComponent = (function () {
                function ListComponent(_articlesService) {
                    this._articlesService = _articlesService;
                }
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
                __metadata("design:paramtypes", [typeof (_a = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _a || Object])
            ], ListComponent);
            exports_1("ListComponent", ListComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map