import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {

  linechart: any;

  ngOnInit(): void {
    this.createSalesChart();
  }

  createSalesChart() {

    Chart.register(
      {
        id: 'custom',
        beforeDraw: function (chart) {
          if (chart.id.toString() === '0') {
            const points = chart.data.datasets[1].data;
            const point = points[4];

            if (point) {
              const element = chart.getDatasetMeta(1).data[4];

              const innerRadius = 4;
              const outerRadius = 8;

              const ctx = chart.ctx;

              // Draw outer circle
              ctx.beginPath();
              ctx.arc(element.x, element.y, outerRadius, 0, 2 * Math.PI);
              ctx.fillStyle = 'rgb(0, 0, 255)';
              ctx.fill();

              // Draw inner circle
              ctx.beginPath();
              ctx.arc(element.x, element.y, innerRadius, 0, 2 * Math.PI);
              ctx.fillStyle = 'rgb(255, 255, 255)';
              ctx.fill();

            }
          }
        },
      },
    );

    const salesData = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          data: [5, 12, 9, 18, 22, 19, 35],
          fill: false,
          borderColor: 'rgb(169, 169, 169)',
          pointRadius: 0,
          lineTension: 0.5,
          radius: 5,
        },
        {
          data: [5, 18, 15, 20, 26, 22, 39],
          fill: true,
          backgroundColor: 'rgb(164 ,164, 227, 0.1)',
          borderColor: 'rgb(0, 0, 255)',
          pointRadius: (context: any) => (context.dataIndex === 4 ? 5 : 0),
          pointStyle: 'custom',
          lineTension: 0.5,
          radius: 5,
        }
      ]
    };

    this.linechart = new Chart("salesChart", {
      type: 'line',
      data: salesData,
      options: {
        scales: {
          x: {
            grid: {
              display: true,
              drawOnChartArea: false,
              color: 'rgba(0, 0, 0, 0)'
            },
            offset: true,
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              color: 'rgb(169, 169, 169)',
              font: {
                size: 12,
                weight: '600',
                family: "'Poppins', sans-serif",
              }
            }
          },
          y: {
            max: 50,
            min: 0,
            ticks: {
              stepSize: 10,
              precision: 0,
              callback: function (value: any) {
                return '$' + value;
              },
              color: 'rgb(169, 169, 169)',
              font: {
                size: 12,
                weight: '600',
                family: "'Poppins', sans-serif",
              }
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            borderColor: 'rgb(169, 169, 169)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: function (context: any) {
                let label = context.formattedValue;
                return '$' + label;
              },
            },
          }
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 10,
            right: 10,
          },
        },
        maintainAspectRatio: false,
        borderColor: ''
      }
    });
  }

}