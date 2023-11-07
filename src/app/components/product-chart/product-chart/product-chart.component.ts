import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.scss']
})
export class ProductChartComponent implements OnInit {

  doughnutchart: any;

  ngOnInit(): void {    
    this.createDoughnutChart();
  }

  createDoughnutChart() {

    const productData = {
      datasets: [{
        data: [300,200,100],
        backgroundColor: [
          'rgb(0, 0, 255)',
          'rgb(109, 109, 227)',
          'rgb(71, 71, 165)'
        ],
        borderWidth: 0
      }],  
    };

    const options:any = {
      cutout: 50,
      layout: {
        padding: {
          top: 10,
          bottom: 20,
          left: 10,
          right: 10,
        }
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              font:{
                weight: '600',
              }
            }
          ]
        }
      },
      events: [],
      animation: {
        onComplete: function(chart:any) {
          var ctx = chart.chart.ctx;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#000';
          ctx.font ='20px Poppins';
          var width = chart.chart.width;
          var height = chart.chart.height;
          var midX = width / 2;
          var midY = height / 2;
          ctx.fillText('50%', midX, midY);
          ctx.font ='12px Poppins';
          ctx.fillStyle = '#a9a9a9';
          ctx.fillText('Popular Items', midX, midY + 20);
        }
      },
      aspectRatio: 1.5
    };

    this.doughnutchart = new Chart("productChart", {
      type: 'doughnut',
      data: productData,
      options: options
    })
  }
}
