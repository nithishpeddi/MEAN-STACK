import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthenticationService {
    public user = window['user'];
    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';
    private _signoutURL = 'api/auth/signout';
    constructor(private http: Http, private _router: Router) {
    }

    isLoggedIn(): boolean {
        return (!!this.user);
    }
    signin(credentials: any): Observable<any> {
        let body = JSON.stringify(credentials);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError)
    }
    signup(user: any): Observable<any> {

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server error');
    }
    signout() {


        return this.http.get(this._signoutURL)
            .map(() => {
                this.user = undefined;
                this._router.navigate(['/authentication/signin']);
            })
            .catch(this.handleError)

    }
}