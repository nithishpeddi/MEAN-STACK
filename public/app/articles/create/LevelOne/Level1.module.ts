import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Level1Component } from './Level1';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
@NgModule({
    declarations: [
        Level1Component
    ],
    imports: [RouterModule, MaterialModule, FormsModule, CommonModule, MdIconModule, MdButtonModule],

})
export class Level1AppModule { }
