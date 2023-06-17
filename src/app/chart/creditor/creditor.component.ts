import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss']
})
export class CreditorComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  private chartData: any = data.find((item: any) => item.name === "Creditor's balance")?.value
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
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
    labels: ['Opening balance', 'Accured credit', 'Paid credit', 'Adjustment', 'Closing balance'],
    datasets: [
      { data: this.chartData,
      backgroundColor: [this.blue, this.red, this.green, this.red, this.blue]},
    ],
    
  };
}
