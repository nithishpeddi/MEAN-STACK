import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../articles.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CommonModule } from '@angular/common';
@Component({

    templateUrl: './interview.html',
    styleUrls: ['./interview.css']
})
export class InterviewComponent {
    user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: ArticlesService) { }
    update() {
        console.log('update is wroking')
        this._articlesService.update(this.article).subscribe(savedArticle =>
            this._router.navigate([`/articles/view/${this.article._id}`]),
            error => this.errorMessage = error);
    }
     next(id: string) {
        this._router.navigate([`/articles/create/LevelOne/${id}`])
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