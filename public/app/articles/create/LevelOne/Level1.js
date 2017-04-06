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
var articles_service_1 = require("../../articles.service");
var authentication_service_1 = require("../../../authentication/authentication.service");
var Level1Component = (function () {
    function Level1Component(_router, _route, _authenticationService, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._articlesService = _articlesService;
        this.allowEdit = false;
    }
    Level1Component.prototype.update = function (id) {
        var _this = this;
        console.log('update2 is wroking');
        this._articlesService.update(this.article).subscribe(function (savedArticle) {
            return _this._router.navigate(['/articles/LevelOne/${id}']);
        }, function (error) { return _this.errorMessage = error; });
    };
    Level1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService
                .read(articleId)
                .subscribe(function (article) {
                _this.article = article;
                _this.allowEdit = (_this.user && _this.user._id === _this.article.creator._id);
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
    };
    return Level1Component;
}());
Level1Component = __decorate([
    core_1.Component({
        templateUrl: './Level1.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        articles_service_1.ArticlesService])
], Level1Component);
exports.Level1Component = Level1Component;
//# sourceMappingURL=Level1.js.map