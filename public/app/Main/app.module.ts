import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../articles/list/list.component';
import { EditComponent } from '../articles/edit/edit.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MaterialModule } from '@angular/material';
import { ArticlesModule } from '../articles/articles.module';
import { AccountModule } from '../Account/account.module';
import { InterviewAppModule } from '../articles/create/interview/interview.module';
import { Level1AppModule } from '../articles/create/LevelOne/Level1.module';
import { HomeModule } from '../Home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule,
        AuthenticationModule, MaterialModule, AccountModule, ArticlesModule, InterviewAppModule, Level1AppModule, HomeModule

    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent, ListComponent, EditComponent,
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }