import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { data } from 'src/data';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-revenue-breakdown',
  templateUrl: './revenue-breakdown.component.html',
  styleUrls: ['./revenue-breakdown.component.scss']
})
export class RevenueBreakdownComponent {
  
  public firstPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[0]
  public firstPieChartData: any = this.firstPieChart.data.map((item: any) => item.data)
  public firstPieChartLabel: any = this.firstPieChart.data.map((item: any) => item.label)
  
  public secondPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[1]
  public secondPieChartData: any = this.secondPieChart.data.map((item: any) => item.data)
  public secondPieChartLabel: any = this.secondPieChart.data.map((item: any) => item.label)

  public thirdPieChart: any = data.find((item: any) => item.name === "Revenue breakdown")?.value[2]
  public thirdPieChartData: any = this.thirdPieChart.data.map((item: any) => item.data)
  public thirdPieChartLabel: any = this.thirdPieChart.data.map((item: any) => item.label)  
  
  colorArray = [ '#456CD7', '#A03D5F', '#6EB484', '#5bb5d1', '#839be5']
  // Bar chart
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        display: true, 
        stacked: true,
        ticks: {
          display: true,
          font: {
            size: 10,
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
        min: -20,
        max: 50,
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

  // Donught chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.firstPieChartLabel,
    datasets: [
      {
        data: this.firstPieChartData,
        backgroundColor: this.colorArray
      }
    ]
  };
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.secondPieChartLabel,
    datasets: [
      { 
        data: this.secondPieChartData,
        backgroundColor: this.colorArray
      }
    ]
  };
  public doughnutChartData3: ChartData<'doughnut'> = {
    labels: this.thirdPieChartLabel,
    datasets: [
      { 
        data: this.thirdPieChartData,
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
