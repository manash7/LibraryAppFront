import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import { Observable,from,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  constructor(private http:HttpClient) { }
  
  private apiurl ='http://localhost:8000/api/'

  addUsers(obj:Object):Observable<any>{
    return this.http.post<Object>(this.apiurl+`register/`,obj);
  }
}
