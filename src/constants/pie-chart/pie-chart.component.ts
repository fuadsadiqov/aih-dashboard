import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit{

  @Input() wrapper: ResponseType[] | any = []
  public colorArray = ['#456CD7', '#A03D5F','#5bb5d1', '#839be5', '#6EB484', '#D3D3D3']
  secondLegend: ResponseType[] = []

  ngOnInit(){
    this.doughnutChartData.labels = this.wrapper.children.map((child: ResponseType) => child.title)
    this.doughnutChartData.datasets[0].data = this.wrapper.children.map((child: ResponseType) => child.value)
    if(this.wrapper.children[0].children){
      this.doughnutChartData.datasets[1].data = this.wrapper.children[0].children.map((item: ResponseType) => item.value)
      this.doughnutChartData.datasets[1].circumference = Math.round((360 * this.wrapper.children[0].value) / 100)
      this.secondLegend = this.wrapper.children[0].children
      this.chart?.update()
    }
    else{
      this.doughnutChartData.datasets.splice(1, 1)
      this.chart?.update()
    }
  }  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Donught chart  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: this.colorArray,
        weight: 5
      },
      {
        data: [],
        backgroundColor: this.colorArray.slice(-3),
        weight: 2,
      }
    ]
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
        display: false
      },
      datalabels: {        
        color: 'black',
        formatter: (value: number, ctx) => {
          return `${value}%`;
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
          let borderColor = context.chart.data.datasets.map((item: any) => item.backgroundColor[context.dataIndex])
          return borderColor;
        },
      },
    },
    layout: {
      padding: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15
      }
    }
  };
}
