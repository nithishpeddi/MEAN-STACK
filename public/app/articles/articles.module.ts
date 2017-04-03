import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesService } from '../articles/articles.service';
import { ArticlesComponent } from './articles.component';
import{MaterialModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,MaterialModule
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