import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, AccumulationDataLabel, IAccLoadedEventArgs, AccumulationTheme, IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.scss'],
})
export class OperationalComponent{
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  private chartData: any = data.find((item: any) => item.name === "Cash movement")?.value
  public firstPieChart: any = data.find((item: any) => item.name === "Operational")?.value[0]
  public secondPieChart: any = data.find((item: any) => item.name === "Operational")?.value[1]
  private firstPieChartData = this.firstPieChart.value.map((item: any) => item.data)
  private secondPieChartData = this.secondPieChart.value.map((item: any) => item.data)
  public firstPieChartLabel = this.firstPieChart.value.map((item: any) => item)
  public secondPieChartLabel = this.secondPieChart.value.map((item: any) => item)

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
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: ['Opening balance', 'Operating inflow', 'Financing activities', 'Operating outflow', 'FX difference', 'Investing activities', 'Cash balance'],
    datasets: [
      { data: this.chartData,
      backgroundColor: [this.blue, this.red, this.green, this.red, this.red, this.red, this.blue]},
    ],
    
  };

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'cargo', 'passangers', 'other cash inflows' ],
    datasets: [
      { data: this.firstPieChartData }
    ]
  };
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: [ 'staff related costs', 'utility', 'taxes', 'fuel' ],
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
      this.green
    ],
  };
  
}
