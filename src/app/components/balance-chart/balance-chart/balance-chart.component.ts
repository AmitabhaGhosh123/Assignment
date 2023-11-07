import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrls: ['./balance-chart.component.scss']
})
export class BalanceChartComponent implements OnInit {

  barChart: any;

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart() {

    const balanceData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: "Income",
          backgroundColor: 'rgb(0, 0, 255)',
          borderColor: 'rgb(0, 0, 255)',
          data: [40, 110, 70, 30, 20, 99, 30, 5, 60, 120, 80, 35],
          barThickness: 5,
          borderRadius: 5
        },
        {
          label: "Borrow",
          backgroundColor: 'rgb(169, 169, 169)',
          borderColor: 'rgb(169, 169, 169)',
          data: [55, 190, 99, 51, 25, 110, 51, 10, 80, 150, 99, 51],
          barThickness: 5,
          borderRadius: 5
        }
      ]
    };

    this.barChart = new Chart("balanceChart", {
      type: 'bar',
      data: balanceData,
      options: {
        scales: {
          x: {
            stacked: true,
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
            },
            grid: {
              display: true,
              drawOnChartArea: false,
              color: 'rgba(0, 0, 0, 0)',
            }
          },
          y: {
            stacked: true,
            max: 300,
            min: 0,
            ticks: {
              stepSize: 50,
              precision: 0,
              color: 'rgb(169, 169, 169)',
              font: {
                size: 12,
                weight: '600',
                family: "'Poppins', sans-serif",
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
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
        events: [],
        maintainAspectRatio: false,
        borderColor: ''
      }
    });
  }

}
