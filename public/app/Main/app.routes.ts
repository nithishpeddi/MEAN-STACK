import { Routes } from '@angular/router';
import { CreateComponent } from '../articles/create/create.component';
import { ListComponent } from '../articles/list/list.component';
import { ViewComponent } from '../articles/view/view.component';
import { EditComponent } from '../articles/edit/edit.component';
import { AccountComponent } from '../Account/account';
import { AppComponent } from './app.component';
import { SignupComponent } from '../authentication/signup/signup.component';
import { HomeComponent } from '../Home/home';
import { SigninComponent } from '../authentication/signin/signin.component';
import { ArticlesComponent } from '../articles/articles.component';
import { InterviewComponent } from '../articles/create/interview/interview';
import { Level1Component } from '../articles/create/LevelOne/Level1'
export const AppRoutes: Routes = [

    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    {
        path: 'Account', children: [
            { path: '', component: AccountComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },
    {
        path: 'articles',
        children: [

            { path: '', component: ListComponent },
            {
                path: 'create', children: [
                    { path: '', component: CreateComponent },
                    { path: 'interview/:articleId', component: InterviewComponent },
                    { path: 'LevelOne/:articleId', component: Level1Component },
                ]
            },
            { path: 'view/:articleId', component: ViewComponent },
            { path: 'edit/:articleId', component: EditComponent }
        ]
    },
];
