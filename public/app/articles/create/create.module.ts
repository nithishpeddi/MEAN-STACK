import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { InterviewAppModule } from '../create/interview/interview.module';
import { RouterModule } from '@angular/router';
import { Level1AppModule } from '../create/LevelOne/Level1.module';
@NgModule({
    declarations:
    [CreateComponent],
    imports:
    [CommonModule, RouterModule, FormsModule, MaterialModule, InterviewAppModule, Level1AppModule]
})
export class InterviewModule { }