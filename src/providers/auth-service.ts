import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout'

export class User {
  constructor(name: string, email: string) {
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  baseUrl = "http://softdev.cmxy.ynou.edu.cn:8080";
  loginPath = "/user/login";
  registerPath = "/user/add";

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }


  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        // let access = (credentials.password === "pass" && credentials.email === "email");
        let urlParam = new URLSearchParams();
        urlParam.append('username', credentials.username);
        urlParam.append('psd', credentials.password);
        let urlParamString = urlParam.toString();
        this.http.post(this.baseUrl + this.loginPath + "?" + urlParamString, null)
          .timeout(3000)
          .map(res => res.json())
          .subscribe(
            res => {
              if (res.login) {
                this.currentUser = new User(res.username, 'saimon@devdactic.com');
                observer.next(true);
                observer.complete();
              }
              else {
                observer.next(false);
                observer.complete();
              }
            },
            err => {
              observer.next(false);
              observer.complete();
              console.error(err);
            },
            () => {
              console.log('done');
            });
      });
    }
  }

  public register(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        let urlParam = new URLSearchParams();
        urlParam.append('username', credentials.username);
        urlParam.append('psd', credentials.password);
        let urlParamString = urlParam.toString();
        this.http.put(this.baseUrl + this.registerPath + "?" + urlParamString, null)
          .map(res => res.json())
          .subscribe(
            res => {
              this.currentUser = new User(res.username, 'saimon@devdactic.com');
              observer.next(true);
              observer.complete();
            },
            err => {
              observer.next(false);
              observer.complete();
              console.error(err);
            },
            () => {
              console.log('done');
            });
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
