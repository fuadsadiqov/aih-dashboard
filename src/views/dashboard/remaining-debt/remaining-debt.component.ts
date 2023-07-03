import { Component } from '@angular/core';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-remaining-debt',
  templateUrl: './remaining-debt.component.html',
  styleUrls: ['./remaining-debt.component.scss']
})
export class RemainingDebtComponent{
  public name: string = "Remaining debt"
  public wrapper: ResponseType[] | any = []

  constructor(private restService: RestService){
    this.restService.getData(this.name)
    .then(res => this.wrapper = res)
  }  
}