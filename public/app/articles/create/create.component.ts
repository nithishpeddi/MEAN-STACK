import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogResultExampleDialog } from './dialog-result-example-result';

import 'rxjs/add/operator/startWith';

@Component({
    selector: 'create',
    templateUrl: './create.template.html',
    styleUrls: ['./create.css'],

})
export class CreateComponent {
    constructor(private _router: Router, private _articlesService: ArticlesService, public dialog: MdDialog) {}
    selectedOption: string;
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

    openDialog() {
        let dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
         this.article.selectedOption = result;
            console.log('article.selectedOption',this.article.selectedOption);
        });
    }

}

