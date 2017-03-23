"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var articles_component_1 = require("./articles.component");
var create_component_1 = require("./create/create.component");
var list_component_1 = require("./list/list.component");
var view_component_1 = require("./view/view.component");
var edit_component_1 = require("./edit/edit.component");
exports.ArticlesRoutes = [{
        path: 'articles',
        component: articles_component_1.ArticlesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ],
    }];
//# sourceMappingURL=articles.routes.js.map