import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  private chartData: any = data.find((item: any) => item.name === "Cash movement")?.value
  private chartDataLabel: any = data.find((item: any) => item.name === "Cash movement")?.label

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    aspectRatio: 2.5,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        display: true, 
        stacked: true,
        ticks: {
          display: true,
          font: {
            size: 10,
          },
          color: '#BBB'
        },
    
        grid: {
          display: false, // Hide y-axis grid lines
        }, 
        // stacked: true,
       },
      y: { 
        display: false, 
        stacked: true,
        min: -20,
        max: 50,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
    },
    elements: {
      bar: {
        borderWidth: 0
      }
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: this.chartDataLabel,
    datasets: [
      { data: this.chartData,
      backgroundColor: [this.blue, this.red, this.green, this.red, this.red, this.red, this.blue]},
    ],
    
  };
}
