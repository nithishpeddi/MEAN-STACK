import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './class/home.component';
import { AuthenticationService } from './authentication/authentication.service';

import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { CreateComponent } from './articles/create/create.component';
import { ListComponent } from './articles/list/list.component';
import { ViewComponent } from './articles/view/view.component';
import { EditComponent } from './articles/edit/edit.component';
import { AuthenticationModule } from '../app/authentication/authentication.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule,
        AuthenticationModule

    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent, HomeComponent, ArticlesComponent, ListComponent, CreateComponent, EditComponent, ViewComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }