import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { RestService } from 'src/services/rest.service';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit{
  public name: string = "Cash movement"
  private colorArray = ['#456CD7', '#A03D5F', '#6EB484']
  public delayed: boolean = false

  public wrapper: ResponseType[] = []
  constructor(private restService: RestService){}
  ngOnInit(): void {
    this.restService.getData(this.name)
    .then((res: Array<ResponseType> | any) => {
      this.wrapper = res.children
      this.barChartData.labels = this.wrapper.map(item => item.title)
      this.barChartData.datasets[0].data = this.wrapper.map(item => item.value)
      this.chart?.update()
    
    })  
  }
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    // aspectRatio: 2.3,
    animation: {
      onComplete: () => {
        this.delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !this.delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        display: true, 
        stacked: true,
        ticks: {
          display: true,
          font: function(context) {
            var width = context.chart.width;
            var size = Math.round(width / 45);

            return {
                size: size
            };
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
        min: 0,
        max: 100,
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
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: this.colorArray
      },
    ],
    
  };
}