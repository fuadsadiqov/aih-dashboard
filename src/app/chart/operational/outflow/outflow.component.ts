import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

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
      { 
        data: this.secondPieChartData, 
        backgroundColor: [
          this.blue,
          this.red,
          this.green,
          '#5bb5d1',
          '#839be5'
        ]
     }
    ]
  };
  public barChartLegend: boolean = false;
  public doughnutChartPlugins = [
    DataLabelsPlugin
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {        
        color: 'black',
        formatter: (value: number) => {
          return `${value}%`
        },
        
        backgroundColor: 'white',
        anchor: 'end',
        padding: 4,
        font: {
          size: 9
        },
        borderWidth: 2,
        borderRadius: 4,
        borderColor(context: any) {          
          const borderColor = context.chart.data.datasets[0].backgroundColor[context.dataIndex];
          return borderColor 
        },
      },
    },
    layout: {
      padding: {
        left: 13,
        right: 13,
        top: 13,
        bottom: 13
      }
    }
  }
}
