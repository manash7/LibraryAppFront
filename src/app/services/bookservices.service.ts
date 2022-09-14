import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookservicesService {

  private apiurl ='http://localhost:8000/api/'

  constructor(private http:HttpClient) { }
  
  getBook(obj:any){
    return this.http.get<any>(this.apiurl+`books/`+obj) 
  }

  get(){
   return this.http.get<any>(this.apiurl+`books/`) 
  }
  add(obj:Object):Observable<any>{
    return this.http.post<Object>(this.apiurl+`books/`,obj)
  }
  del(id:any){
    return this.http.delete<any>(this.apiurl+`books/`+id)
  }
  edit(obj:Object){
    return this.http.patch(this.apiurl+`books/`,obj)
  }

}
