import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit{
  public nameArr: string[] = ["Cargo volume", "Import", "Export", "Transit", "Internal", "Passangers", "Employees"]
  // public trades: any = data.find((item: any) => item.name === "Trade")?.value.slice(0, 6)
  // public employees: any = data.find((item: any) => item.name === "Trade")?.value.slice(-1)
  constructor(private restService: RestService){      
  } 
  ngOnInit(): void {
    this.restService.getMultipleData(this.nameArr)
    .then(res => console.log(res))
  }
} 
