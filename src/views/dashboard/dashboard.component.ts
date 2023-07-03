import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public active: number = 1 
  constructor(private route: ActivatedRoute, private router: Router){
    this.addQuery('operational')
  }
  addQuery(option: string){
    this.router.navigate([], {
      relativeTo: this.route, 
      queryParams: {option: option},
      queryParamsHandling: 'merge'
    })
  }
}
