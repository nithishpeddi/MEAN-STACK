"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_component_1 = require("./authentication.component");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map