import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/articles/edit/edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
    article: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: ArticlesService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;
            },
                error => this._router.navigate(['/articles']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update(id:string) {
        console.log('update is wroking')
        console.log('id', id)
        this._articlesService.update(this.article).subscribe(savedArticle =>
            this._router.navigate([`/articles/view/${id}`]),
            error => this.errorMessage = error);
    }
}