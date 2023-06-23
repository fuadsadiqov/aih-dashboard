import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseType } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl: string = 'http://localhost:3000/data'
  constructor(private http: HttpClient){}
  
  getData(): Observable<Object>{
    return this.http.get(this.baseUrl)
  } 
}
