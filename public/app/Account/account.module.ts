import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{MaterialModule} from '@angular/material';

import{AccountComponent} from '../Account/account';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,MaterialModule
    ],
    declarations: [
        AccountComponent
    ]
})
export class AccountModule { }