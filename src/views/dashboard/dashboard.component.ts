import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public activeTime: string | any = localStorage.getItem('time') ? localStorage.getItem('time') : 'yearly' 
  public activeOption: string | any = localStorage.getItem('query') ? localStorage.getItem('query') : 'operational'
  public activeMonth: string | any = localStorage.getItem('month') ? localStorage.getItem('month') : 'september'

  constructor(private route: ActivatedRoute, private router: Router){
    this.addQuery(this.activeOption)
    this.addTime(this.activeTime)
    this.addMonth(this.activeMonth)    
  }
  addQuery(value: string){
    localStorage.setItem('query', value)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {option: value},
      queryParamsHandling: 'merge'
    })  
    this.activeOption = value
  }
  addTime(value: string){
    localStorage.setItem('time', value)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {time: value},
      queryParamsHandling: 'merge'
    })  
    this.activeTime = value
  }
  addMonth(value: string){
    localStorage.setItem('month', value)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {month: value},
      queryParamsHandling: 'merge'
    })  
    this.activeMonth = value
  }
}
