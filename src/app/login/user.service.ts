import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService {
  url="http://localhost:3003/users";
  constructor(private http: HttpClient) {  }
 getData():Observable<any[0]>{
    return this.http.get(this.url);
  }
  getUsername(Username): Observable<any[0]> {
    return this.http.get(`${this.url}/${Username}`);
    }
    addUser(newData):Observable<any[0]>{
      console.log(newData);
      return this.http.post(this.url, newData);
    }
}