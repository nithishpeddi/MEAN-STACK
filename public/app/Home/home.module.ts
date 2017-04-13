import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../Home/home';
import { UserService } from '../Contact/user.service';
import { ContactComponent } from '../Contact/contact.component';
import { ContactService } from '../Contact/contact.service';
import { AwesomePipe } from '../Contact/awesome.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
@NgModule({
    imports: [BrowserModule, FormsModule, MaterialModule],
    declarations: [
        HomeComponent,
        AwesomePipe, ContactComponent,
    ],
    providers: [ContactService, UserService],

})
export class HomeModule { }


