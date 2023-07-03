import { AfterContentChecked, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
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
  public colorArray = ['#456CD7', '#A03D5F', '#6EB484']

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
