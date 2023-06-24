import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl: string = 'http://localhost:3000/data'
  constructor(private http: HttpClient){}
  
  getData(name: string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl)
      .subscribe((res: Array<ResponseType> | any) => {        
        let item: ResponseType = res.find((item: ResponseType) => item.title === name)
        resolve(item)
      }), (error: any) => {
        reject(error)
      }
    })
  }
  getMultipleData(titleArr: string[]): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl)
      .subscribe((res: Array<ResponseType> | any) => {
        let foundObjects = res.filter((obj: ResponseType) => titleArr.includes(obj.title))
        resolve(foundObjects)
      }), (error: any) => {
        reject(error)
      }
    }) 
  }
}