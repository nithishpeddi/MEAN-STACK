"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_component_1 = require("../articles/create/create.component");
var list_component_1 = require("../articles/list/list.component");
var view_component_1 = require("../articles/view/view.component");
var edit_component_1 = require("../articles/edit/edit.component");
var account_1 = require("../Account/account");
var signup_component_1 = require("../authentication/signup/signup.component");
var home_1 = require("../Home/home");
var signin_component_1 = require("../authentication/signin/signin.component");
var interview_1 = require("../articles/create/interview/interview");
var Level1_1 = require("../articles/create/LevelOne/Level1");
exports.AppRoutes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: home_1.HomeComponent },
    {
        path: 'Account', children: [
            { path: '', component: account_1.AccountComponent },
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ]
    },
    {
        path: 'articles',
        children: [
            { path: '', component: list_component_1.ListComponent },
            {
                path: 'create', children: [
                    { path: '', component: create_component_1.CreateComponent },
                    { path: 'interview/:articleId', component: interview_1.InterviewComponent },
                    { path: 'LevelOne/:articleId', component: Level1_1.Level1Component },
                ]
            },
            { path: 'view/:articleId', component: view_component_1.ViewComponent },
            { path: 'edit/:articleId', component: edit_component_1.EditComponent }
        ]
    },
];
//# sourceMappingURL=app.routes.js.map