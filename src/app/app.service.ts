import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { User } from "./user/user.model";
import { Http, Response } from "@angular/http";

@Injectable()
export class AppService {

  private apiUrl = 'http://localhost:8080/RESTWithSpringMVC/API/Employee/sampleUserData';

  constructor(private http: Http) { }

  public getUserData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
