import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { RestService } from 'src/services/rest.service';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.scss', '../revenue-breakdown.component.scss']
})
export class PassangerComponent{
  public name: string = "Passanger"
    public wrapper: ResponseType[] | any = []
  public colorArray = ['#456CD7', '#A03D5F','#5bb5d1', '#839be5', '#6EB484', '#D3D3D3']

  constructor(private restService: RestService){}
  ngOnInit(): void {
    this.restService.getData(this.name)
    .then(res => {
      this.wrapper = res
      this.doughnutChartData.labels = this.wrapper.children.map((item: ResponseType) => item.title)
      this.doughnutChartData.datasets[0].data = this.wrapper.children.map((item: ResponseType) => item.value)      
      this.chart?.update()      
    })
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Donught chart  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: this.colorArray
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
          const borderColor = context.chart.data.datasets[0].backgroundColor[context.dataIndex];
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