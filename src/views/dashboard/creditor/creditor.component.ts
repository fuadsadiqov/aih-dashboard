import { Component } from '@angular/core';
import { RestService } from 'src/services/rest.service';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss']
})
export class CreditorComponent{
  public name: string = 'Creditors balance'
  public wrapper: ResponseType[] = []
  constructor(private restService: RestService){
    this.restService.getData(this.name)
    .then((res) => {
      this.wrapper = res
  })
  }
}