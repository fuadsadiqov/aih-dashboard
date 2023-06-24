import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-inflow',
  templateUrl: './inflow.component.html',
  styleUrls: ['./inflow.component.scss', '.././operational.component.scss']
})
export class InflowComponent implements OnInit{
  public name: string = "Operational inflow"
  public chartOptions: any;
  public chartLabels: string[] | undefined;
  public wrapper: ResponseType[] | any = []
  public colorArray = ['#456CD7', '#A03D5F', '#6EB484', '#5bb5d1', '#839be5']
  constructor(private restService: RestService){}

  // Donught chart
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [], 
        backgroundColor: this.colorArray
       }
    ],
  };
  public doughnutChartPlugins = [
    DataLabelsPlugin
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      legend: {
        display: false,
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
  ngOnInit(): void {    
    this.restService.getData(this.name)
    .then(res => {
        this.wrapper = res
        this.doughnutChartData.labels = this.wrapper.children.map((item: ResponseType) => item.title)
        this.doughnutChartData.datasets[0].data = this.wrapper.children.map((item: ResponseType) => item.value)
        this.chart?.update()
      })
  }
};