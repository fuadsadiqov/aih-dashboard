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
  newArr: any = []

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.wrapper.currentValue.length != 0){
      for (let index = 0; index < this.wrapper.children.length; index++) {
        let previousElement: ResponseType | any = this.wrapper.children[index - 1];
        let element: ResponseType | any = this.wrapper.children[index];
        let result: number[] | any
        const value = element?.value ?? 0;
        const isFirstElement = index === 0;
        const isLastElement = index === this.wrapper.children.length - 1;
        if ((value > 0 && !isFirstElement && !isLastElement) || (value < 0 && !isFirstElement && !isLastElement)) {
          result = [(previousElement?.value ? previousElement?.value : 0), element?.value + (previousElement?.value ? previousElement?.value : 0)]
          element.value = element?.value + (previousElement?.value ? previousElement?.value : 0)
        }
        if(isFirstElement){
          result = [0, element.value]          
        }
        if(isLastElement){
          result = [previousElement.value, 0]
        }
        this.newArr = [...this.newArr, result]
      }
      this.barChartData.labels = this.wrapper.children.map((item: ResponseType) => item.title)
      this.barChartData.datasets[0].data = this.newArr      
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
        max: 350000,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(tooltipItem) {
            let value: any = tooltipItem.parsed.y
            if(value != null){
              value = value.toLocaleString()
            }
            return value
          },
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter(value, context) {
          let result: any = (value?.[1] - value?.[0])
          result = (result < 0 && value?.[1] !== 0) ? `(${result * -1})` : result
          result = (result < 0 && value?.[1] === 0) ? result * -1 : result
          return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");          
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
          else if(ctx.raw?.[0] < ctx.raw?.[1]){
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
