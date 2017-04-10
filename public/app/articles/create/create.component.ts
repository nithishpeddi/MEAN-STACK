import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';

@Component({
    selector: 'create',
    templateUrl: './create.template.html',
    styleUrls: ['./create.css'],

})
export class CreateComponent {

    rating: number;

    article: any = {};
    errorMessage: string;
    constructor(private _router: Router, private _articlesService: ArticlesService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate([`/articles/view/${createdArticle._id}`]),
            error => this.errorMessage = error);
    }
}

