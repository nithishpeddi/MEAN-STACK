"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_component_1 = require("./articles/create/create.component");
var list_component_1 = require("./articles/list/list.component");
var view_component_1 = require("./articles/view/view.component");
var edit_component_1 = require("./articles/edit/edit.component");
var signup_component_1 = require("../app/authentication/signup/signup.component");
var home_component_1 = require("./class/home.component");
var signin_component_1 = require("../app/authentication/signin/signin.component");
var articles_component_1 = require("./articles/articles.component");
exports.AppRoutes = [
    { path: 'class', component: home_component_1.HomeComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    {
        path: 'articles',
        component: articles_component_1.ArticlesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ],
    }
];
//# sourceMappingURL=app.routes.js.map