import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'list',
    templateUrl: 'app/articles/list/list.template.html',
    styleUrls:['app/articles/list/list.css']
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }

    returnToArticle(id: string) {
        this._router.navigate([`/articles/view/${id}`]);
    }

    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles = articles);
    }
}