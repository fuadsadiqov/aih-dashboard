import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Chart } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { data } from 'src/data';

@Component({
  selector: 'app-inflow',
  templateUrl: './inflow.component.html',
  styleUrls: ['./inflow.component.scss', '../operational.component.scss']
})
export class InflowComponent implements OnInit{
  public chartOptions: any;
  public chartLabels: string[] | undefined;

  ngOnInit(): void {    
  }
  private blue: string = 'hsl(223.97deg 64.6% 55.69%)'
  private green: string = 'hsl(138.86deg 31.82% 56.86%)'
  private red: string  = 'hsl(339.39deg 44.8% 43.33%)'
  
  public pieChart: any = data.find((item: any) => item.name === "Operational")?.value[0]
  private pieChartData = this.pieChart.value.map((item: any) => item.data)
  private pieChartLegend = this.pieChart.value.map((item: any) => item.legend)
  public pieChartLabel = this.pieChart.value.map((item: any) => item)

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.pieChartLegend,
    datasets: [
      { 
        data: this.pieChartData, 
        backgroundColor: [
          this.blue,
          this.red,
          this.green,
          '#5bb5d1',
          '#839be5'
      ] }
    ]
  };
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
  
};