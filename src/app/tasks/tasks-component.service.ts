import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksComponentService {
  url="http://localhost:3004/tasks";

  constructor(private http: HttpClient) {  }

 getData():Observable<any[0]>{
    return this.http.get(this.url);
  }
 
  addTask(newData):Observable<any[0]>{
    return this.http.post(this.url, newData);
  }
  getID(id): Observable<any[0]> {
    return this.http.get(`${this.url}/${id}`);
    }
    
}