import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ResponseType } from 'src/interfaces/response.interface';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-remaining-debt',
  templateUrl: './remaining-debt.component.html',
  styleUrls: ['./remaining-debt.component.scss']
})
export class RemainingDebtComponent implements OnInit{
  public name: string = "Remaining debt"
  public wrapper: ResponseType[] | any = []
  public colorArray = ['#456CD7', '#A03D5F','#5bb5d1', '#839be5', '#6EB484', '#D3D3D3']

  constructor(private restService: RestService){}
  ngOnInit(): void {
    this.restService.getData(this.name)
    .then(res => {
      this.wrapper = res
      this.doughnutChartData.labels = this.wrapper.children.map((item: ResponseType) => item.title)
      this.doughnutChartData.datasets[0].data = this.wrapper.children.map((item: ResponseType) => item.value)
      this.doughnutChartData.datasets[1] = {
        data: this.wrapper.children[0].children.map((item: ResponseType) => item.value),
        circumference: Math.round((360 * this.wrapper.children[0].value) / 100), 
        backgroundColor: this.colorArray.slice(-3),
      }
      this.chart?.update()
    })
  }
  
  // Donught chart
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [], 
        backgroundColor: this.colorArray,
        borderWidth: 0,
        weight: 2,
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      },
      { 
        data: [],
        weight: 1,
        datalabels: {
          anchor: 'start',
          align: 'end'
        }
      },
    ]
  };
  public doughnutChartPlugins = [
    DataLabelsPlugin];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    elements: {
      arc: {
        borderWidth: 2,        
      },
    },
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
        top: 0,
        right: 40,
        bottom: 0,
        left: 40,
      }
    }
    }
}