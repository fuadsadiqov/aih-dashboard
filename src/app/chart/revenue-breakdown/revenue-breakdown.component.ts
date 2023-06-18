import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-revenue-breakdown',
  templateUrl: './revenue-breakdown.component.html',
  styleUrls: ['./revenue-breakdown.component.scss']
})
export class RevenueBreakdownComponent {
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  public firstPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[0]
  public secondPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[1]
  public thirdPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[2]
  
  public firstPieChartData: any = this.firstPieChart.data.map((item: any) => item.data)
  public secondPieChartData: any = this.secondPieChart.data.map((item: any) => item.data)
  public thirdPieChartData: any = this.thirdPieChart.data.map((item: any) => item.data)

  public firstPieChartLabel: any = this.firstPieChart.data.map((item: any) => item.label)
  public secondPieChartLabel: any = this.secondPieChart.data.map((item: any) => item.label)
  public thirdPieChartLabel: any = this.thirdPieChart.data.map((item: any) => item.label)
  
  constructor(){
    
  }
  // Bar chart
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

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.firstPieChartLabel,
    datasets: [
      { data: this.firstPieChartData }
    ]
  };
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.secondPieChartLabel,
    datasets: [
      { data: this.secondPieChartData }
    ]
  };
  public doughnutChartData3: ChartData<'doughnut'> = {
    labels: this.thirdPieChartLabel,
    datasets: [
      { data: this.thirdPieChartData }
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
      this.green
    ],
  };
}
