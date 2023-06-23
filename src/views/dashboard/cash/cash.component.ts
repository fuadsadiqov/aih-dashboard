import { Component, ViewChild } from '@angular/core';
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
export class CashComponent {
  public name: string = ""
  public item: ResponseType = {
    title: '',
    value: null,
    children: []
  }
  itemChildrenTitle: string[] | any = []
  itemChildrenValues: number[] | any = []

  constructor(private restService: RestService){
    this.restService.getData()
    .subscribe((res: ResponseType[] | any) => {        
      this.item = res.find((item: ResponseType) => item.title === "Cash movement");
      this.name = this.item.title
      this.itemChildrenTitle = this.item.children?.map((item: ResponseType) => item.title)
      this.itemChildrenValues = this.item.children?.map((item: ResponseType) => item.value)
      console.log(this.itemChildrenTitle);
      console.log(this.itemChildrenValues);
    })    
  }
  private colorArray = [ '#456CD7', '#A03D5F', '#6EB484']
  public delayed: boolean = false
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    aspectRatio: 2.3,
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
    labels: this.itemChildrenTitle,
    datasets: [
      { 
        data: this.itemChildrenValues,
        backgroundColor: this.colorArray},
    ],
    
  };
}
