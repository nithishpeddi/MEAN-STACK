import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesService } from './articles.service';
import { ArticlesComponent } from './articles.component';
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { ViewsModule } from './view/view.module';
import { InterviewModule } from './create/create.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule, MaterialModule, MdDialogModule, ViewsModule, InterviewModule
    ],
    declarations: [
        ArticlesComponent
    ],
    providers: [
        ArticlesService
    ]
})
export class ArticlesModule {

}