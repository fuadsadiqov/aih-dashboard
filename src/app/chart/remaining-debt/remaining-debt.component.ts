import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-remaining-debt',
  templateUrl: './remaining-debt.component.html',
  styleUrls: ['./remaining-debt.component.scss']
})
export class RemainingDebtComponent {
  constructor(){  }
  public firstPieChart: any = data.find((item: any) => item.name === "Remaining debt")?.value[0]
  private firstPieChartData = this.firstPieChart.value.map((item: any) => item.data)
  public firstPieChartLegend = this.firstPieChart.value.map((item: any) => item)
  public firstPieChartLabel = this.firstPieChart.value.map((item: any) => item.legend)
  public secondPieChart: any = data.find((item: any) => item.name === "Remaining debt")?.value[1]
  private secondPieChartData = this.secondPieChart.value.map((item: any) => item.data)
  public secondPieChartLegend = this.secondPieChart.value.map((item: any) => item)
  public secondPieChartLabel = this.secondPieChart.value.map((item: any) => item.legend)
  
  colorArray = [ '#456CD7', '#A03D5F', '#6EB484', '#5bb5d1', '#839be5']
  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 
        'loans from gov',
        'gov guaranteed',
        'loans without government gurantee',
        'credit suisse',
        'societe generate',
        'HSBC bank'
     ],
    datasets: [
      { 
        data: this.firstPieChartData, 
        backgroundColor: this.colorArray,
        borderWidth: 0
      },
      { 
        data: this.secondPieChartData,
        backgroundColor: this.colorArray
      },
    ]
  };
  public doughnutChartPlugins = [
    DataLabelsPlugin
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartConfiguration['options'] = {
    elements: {
      arc: {
        borderWidth: 4,
        
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

}
