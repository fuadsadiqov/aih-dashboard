import { Component } from '@angular/core';
import { RestService } from 'src/services/rest.service';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent{
  public name: string = "Cash movement"
  public wrapper: ResponseType[] = []

  constructor(private restService: RestService){
    this.restService.getData(this.name)
    .then((res: Array<ResponseType> | any) => {      
      this.wrapper = res
    })  
  }
}
