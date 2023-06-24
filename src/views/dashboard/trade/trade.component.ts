import { Component, OnInit } from '@angular/core';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit{
  public nameArr: string[] = ["Cargo volume", "Import", "Export", "Transit", "Internal", "Passangers", "Employees"]
  public wrapper: ResponseType[] | any = []
  
  public lastItemOfWrapper: ResponseType[] | undefined | any
  constructor(private restService: RestService){      
  } 
  ngOnInit(): void {
    this.restService.getMultipleData(this.nameArr)
    .then((res: ResponseType[]) => {
      this.wrapper = res.slice(0, res.length - 1)
      this.lastItemOfWrapper = res.slice(res.length  - 1)
    })
  }
} 
