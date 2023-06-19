import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { data } from 'src/data';

@Component({
  selector: 'app-outflow',
  templateUrl: './outflow.component.html',
  styleUrls: ['./outflow.component.scss', '../operational.component.scss']
})
export class OutflowComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  public secondPieChart: any = data.find((item: any) => item.name === "Operational")?.value[1]
  private secondPieChartData = this.secondPieChart.value.map((item: any) => item.data)
  private secondPieChartLegend = this.secondPieChart.value.map((item: any) => item.legend)
  public secondPieChartLabel = this.secondPieChart.value.map((item: any) => item)

  // Donught chart
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.secondPieChartLegend,
    datasets: [
      { data: this.secondPieChartData }
    ]
  };
  public barChartLegend: boolean = false;

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    backgroundColor: [
      this.blue,
      '#5bb5d1',
      '#839be5',
      this.green,
      this.red
    ],
  };
}
