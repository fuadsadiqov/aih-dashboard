import { Component } from '@angular/core';
import { data } from 'src/data';
@Component({
  selector: 'app-rolling-stock',
  templateUrl: './rolling-stock.component.html',
  styleUrls: ['./rolling-stock.component.scss']
})
export class RollingStockComponent {
  private commonData: any = data.find((item: any) => item.name === "Rolling stock")?.value
  public cargoData: any = this.commonData[0]
  public passangerData: any = this.commonData[1]

  constructor(){
    console.log(this.passangerData);
    
  }
  
}
