import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';


@Component({
    selector: 'view',
    templateUrl: './view.template.html',
    styleUrls: ['./view.css']
})
export class ViewComponent {
    user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: ArticlesService) { }

    next(id: string) {
        this._router.navigate([`/articles/create/interview/${id}`])
    }
    edit(id: string) {
        this._router.navigate([`/articles/edit/${id}`]);
    }
      section(id: string) {
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
                    this.allowEdit = (this.user && this.user._id ===
                        this.article.creator._id);
                },
                error => this._router.navigate(['/articles'])
                );
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    delete() {
        this._articlesService.delete(this.article._id).subscribe(deletedArticle =>
            this._router.navigate(['/articles/']),
            error => this.errorMessage = error);
    }
}
