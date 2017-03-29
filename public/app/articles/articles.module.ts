import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesService } from '../articles/articles.service';
import { ArticlesComponent } from './articles.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        ArticlesComponent,

    ],
    providers: [
        ArticlesService
    ],
})
export class ArticlesModule {

}