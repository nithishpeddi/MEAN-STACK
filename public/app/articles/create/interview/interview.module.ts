import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterviewComponent} from './interview';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import{FormsModule} from '@angular/forms';
@NgModule({
    declarations: [
      InterviewComponent
    ],
    imports :[RouterModule,MaterialModule,FormsModule],

})
export class InterviewAppModule { }
