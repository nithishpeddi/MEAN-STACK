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
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ArticlesService = (function () {
    function ArticlesService(_http) {
        this._http = _http;
        this._baseURL = 'api/articles';
    }
    ArticlesService.prototype.create = function (article) {
        return this._http
            .post(this._baseURL, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.read = function (articleId) {
        return this._http
            .get(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.update = function (article) {
        return this._http
            .put(this._baseURL + "/" + article._id, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.delete = function (articleId) {
        console.log('articleid', articleId);
        return this._http
            .delete(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.list = function () {
        return this._http
            .get(this._baseURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map