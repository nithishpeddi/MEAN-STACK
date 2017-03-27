import { Routes } from '@angular/router';
import { CreateComponent } from './articles/create/create.component';
import { ListComponent } from './articles/list/list.component';
import { ViewComponent } from './articles/view/view.component';
import { EditComponent } from './articles/edit/edit.component';

import { AppComponent } from './app.component';
import { SignupComponent } from '../app/authentication/signup/signup.component';
import { HomeComponent } from './class/home.component';
import { SigninComponent } from '../app/authentication/signin/signin.component';
import { ArticlesComponent } from './articles/articles.component';
export const AppRoutes: Routes = [
    { path: 'class', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'create', component: CreateComponent },
            { path: ':articleId', component: ViewComponent },
            { path: ':articleId/edit', component: EditComponent }
        ],
    }];