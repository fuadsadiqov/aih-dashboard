import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { data } from 'src/data';

@Component({
  selector: 'app-remaining-debt',
  templateUrl: './remaining-debt.component.html',
  styleUrls: ['./remaining-debt.component.scss']
})
export class RemainingDebtComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  public firstPieChart: any = data.find((item: any) => item.name === "Remaining debt")?.value[0]
  private firstPieChartData = this.firstPieChart.value.map((item: any) => item.data)
  public firstPieChartLabel = this.firstPieChart.value.map((item: any) => item)
  public secondPieChart: any = data.find((item: any) => item.name === "Remaining debt")?.value[1]
  private secondPieChartData = this.secondPieChart.value.map((item: any) => item.data)
  public secondPieChartLabel = this.secondPieChart.value.map((item: any) => item)

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'cargo', 'passangers', 'other cash inflows' ],
    datasets: [
      { data: this.firstPieChartData },
      { data: this.secondPieChartData },
    ]
  };
  public barChartLegend: boolean = false;

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    backgroundColor: [
      this.blue,
      this.red,
      '#5bb5d1',
      '#839be5',
      this.green,
    ],
  };

}
