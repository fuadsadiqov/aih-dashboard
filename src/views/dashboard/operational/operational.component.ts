import { Component } from '@angular/core';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.scss'],
})
export class OperationalComponent{
  private nameArr: string[] = ["Operational inflow", "Operational outflow"]
  public wrapper: ResponseType[] = []

  constructor(private restService: RestService){
    this.restService.getMultipleData(this.nameArr)
    .then(res => this.wrapper = res)
  }
}
