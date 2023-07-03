import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ResponseType } from 'src/interfaces/response.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges{
  @Input() wrapper: ResponseType[] | any = []  
  
  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.wrapper.currentValue.length != 0){
      this.barChartData.labels = this.wrapper.children.map((item: ResponseType) => item.title)
      this.barChartData.datasets[0].data = this.wrapper.children.map((item: ResponseType) => item.value)      
      this.chart?.update()
    }
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
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
       },
      y: { 
        display: false, 
        stacked: true,
        min: 0,
        // max: 100000,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter(value, context) {
          console.log("Previous: ", context.dataset.data[context.dataIndex - 1]);
          console.log("Current:", context.dataset.data[context.dataIndex]);
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
        backgroundColor(ctx: any) {
          if((ctx.chart.data.datasets[0].data.length - 1) - ctx.dataIndex == 0 || ctx.dataIndex == 0){
            ctx.chart.options.backgroundColor = '#456CD7' 
            return ctx.chart.options.backgroundColor = '#456CD7'
          }
          else if(ctx.raw > 0){
            return ctx.chart.options.backgroundColor = '#6EB484' 
          }
          else{          
            return ctx.chart.options.backgroundColor = '#A03D5F'
          }
        },
      },
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
        data: []
      },
    ],
    
  };
}
