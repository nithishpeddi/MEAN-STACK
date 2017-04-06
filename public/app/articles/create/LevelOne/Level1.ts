import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../articles.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CommonModule } from '@angular/common';

@Component({

    templateUrl: './Level1.html',
    //   styleUrls: []
})
export class Level1Component {
     user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: ArticlesService) { }
    update(id: string) {
        console.log('update2 is wroking')
        this._articlesService.update(this.article).subscribe(savedArticle =>
            this._router.navigate(['/articles/LevelOne/${id}']),
            error => this.errorMessage = error);
    }
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articlesService
                .read(articleId)
                .subscribe(
                article => {
                    this.article = article;
                    this.allowEdit = (this.user && this.user._id === this.article.creator._id);
                },
                error => this._router.navigate(['/articles'])
                );
        });
    }

}