import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { data } from 'src/data';

@Component({
  selector: 'app-inflow',
  templateUrl: './inflow.component.html',
  styleUrls: ['./inflow.component.scss', '../operational.component.scss']
})
export class InflowComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  public firstPieChart: any = data.find((item: any) => item.name === "Operational")?.value[0]
  private firstPieChartData = this.firstPieChart.value.map((item: any) => item.data)
  public firstPieChartLabel = this.firstPieChart.value.map((item: any) => item)

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'cargo', 'passangers', 'other cash inflows' ],
    datasets: [
      { data: this.firstPieChartData }
    ]
  };
  public barChartLegend: boolean = false;

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    tooltips: {
      callbacks: {
        title: function(tooltipItem: { [x: string]: string | number; }[], data: { [x: string]: { [x: string]: any; }; }) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem: { [x: string]: string | number; }, data: { [x: string]: { [x: string]: { [x: string]: any; }; }[]; }) {
          return data['datasets'][0]['data'][tooltipItem['index']];
        },
        afterLabel: function(tooltipItem: { [x: string]: string | number; }, data: { [x: string]: any[]; }) {
          var dataset = data['datasets'][0];
          var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
          return '(' + percent + '%)';
        }
      }},
    backgroundColor: [
      this.blue,
      '#5bb5d1',
      '#839be5',
      this.green,
      this.red
    ],
  };

}
