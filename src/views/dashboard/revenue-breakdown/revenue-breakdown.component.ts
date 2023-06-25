import { Component } from '@angular/core';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-revenue-breakdown',
  templateUrl: './revenue-breakdown.component.html',
  styleUrls: ['./revenue-breakdown.component.scss']
})
export class RevenueBreakdownComponent{
  public nameArr: string[] = ['Cargo', "Passanger", "Other"]
  public name: string = "Revenue breakdown by segments"
  public wrapper: ResponseType[] = []
  public colorArray = ['#456CD7', '#A03D5F','#5bb5d1', '#839be5', '#6EB484', '#D3D3D3']

  constructor(private restService: RestService){
    this.restService.getMultipleData(this.nameArr)
    .then(res => this.wrapper = res)
  }
}