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
    console.log(this.activeOption);
    this.addQuery(this.activeOption)
    this.addTime(this.activeTime)
    this.addMonth(this.activeMonth)
    
  }
  addQuery(option: string){
    localStorage.setItem('query', option)
    this.activeOption = option
    this.router.navigate([], {
      relativeTo: this.route, 
      queryParams: {option: option},
      queryParamsHandling: 'merge'
    })
  }
  addTime(time: string){
    localStorage.setItem('time', time)
    this.activeTime = time
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {date: time},
      queryParamsHandling: 'merge'
    })
  }
  addMonth(value: string){
    localStorage.setItem('month', value)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {month: value},
      queryParamsHandling: 'merge'
    })
  }
}
