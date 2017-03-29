import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import{HomeComponent} from '../Home/home';
import { CreateComponent } from '../articles/create/create.component';
import { ListComponent } from '../articles/list/list.component';
import { ViewComponent } from '../articles/view/view.component';
import { EditComponent } from '../articles/edit/edit.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MaterialModule } from '@angular/material';
import{ArticlesModule} from '../articles/articles.module';
import{AccountModule} from '../Account/account.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule,
        AuthenticationModule, MaterialModule,AccountModule,ArticlesModule

    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent, ListComponent, CreateComponent, EditComponent, ViewComponent,HomeComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }