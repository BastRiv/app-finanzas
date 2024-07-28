import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiRoot } from './apiroute';

let apiUrl = ApiRoot.url;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) {
  }

  postData(credentials: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(apiUrl + "login/", JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }


  createUser(data: any) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(apiUrl + "register/", JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
