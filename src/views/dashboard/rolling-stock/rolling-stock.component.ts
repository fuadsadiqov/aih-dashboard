import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/services/rest.service';
@Component({
  selector: 'app-rolling-stock',
  templateUrl: './rolling-stock.component.html',
  styleUrls: ['./rolling-stock.component.scss']
})
export class RollingStockComponent implements OnInit{
  name: string = "Rolling stock and its utilization"
  wrapper: ResponseType[] | any = []
  constructor(private restService: RestService){}

  ngOnInit(): void{
    this.restService.getData(this.name)
    .then(res => {
      this.wrapper = res
    })
  }
}
  
