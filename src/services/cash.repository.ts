import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { ResponseType } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleRepository {    
    constructor(private restService: RestService){
        this.restService.getData()
        .subscribe((res: any) => {
            console.log(res);
            
        })
        
    }


}
