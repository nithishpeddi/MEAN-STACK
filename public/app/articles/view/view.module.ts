import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { ViewComponent } from './view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule, MaterialModule, MdDialogModule
    ],
    declarations: [
        ViewComponent
    ]

})
export class ViewsModule {

}