import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'create',
    templateUrl: './create.template.html',
    styleUrls: ['./create.css'],

})
export class CreateComponent {
    constructor(private _router: Router, private _articlesService: ArticlesService) { }


    value: string;
    rating: number;
    article: any = {};
    errorMessage: string;

    options = [
        { value: 'Good', description: 'Good' },
        { value: 'Extrodinary', description: 'Extrodinary' },
        { value: 'SuperStar', description: 'SuperStar' }
    ];

    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate([`/articles/view/${createdArticle._id}`]),
            error => this.errorMessage = error);
    }
}

