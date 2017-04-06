import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterviewComponent} from './interview';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import{FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
@NgModule({
    declarations: [
      InterviewComponent
    ],
    imports :[RouterModule,MaterialModule,FormsModule,CommonModule],

})
export class InterviewAppModule { }
