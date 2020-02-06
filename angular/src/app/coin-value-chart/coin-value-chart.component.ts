import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../service/app.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'coin-value-chart',
  templateUrl: './coin-value-chart.component.html',
  styleUrls: ['./coin-value-chart.component.scss']
})

export class CoinValueChartComponent implements OnInit {

  constructor(
    private appService: AppService) {
  }

  @ViewChild('bitcoinLineChart', {static: false}) private bitcoinRef;
  @ViewChild('bitcoinCashLineChart', {static: false}) private bitcoinCashRef;
  @ViewChild('ethereumLineChart', {static: false}) private ethereumRef;
  @ViewChild('binanceLineChart', {static: false}) private binanceRef;

  lineCharts = [];
  lineChart: any;
  coins = ['1', '2', '3', '4'];
  limits =[
    {
      value: 10,
      name: "10"
    }, {
      value: 25,
      name: "25"
    }, {
      value: 50,
      name: "50"
    }, {
      value: 100,
      name: "100"
    }
  ];
  selectedLimit = this.limits[2].value;
  updateLimit = 1;

  //Do this after we have retrieved the data as the @ViewChild fires after onInit is hit
  initializeChartObjects(): void {
    this.lineCharts = [
      {
        chartData: [],
        color: "#F8DD34",
        ref: this.bitcoinRef,
      }, {
        chartData: [],
        color: "#04C02C",
        ref: this.bitcoinCashRef,
      }, {
        chartData: [],
        color: "#048ABD",
        ref: this.ethereumRef,
      }, {
        chartData: [],
        color: "#6449B3",
        ref: this.binanceRef,
      }
    ];
  }

  createLineChart(ref, data, label, color, title): void {
    return new Chart(ref.nativeElement, {
      type: 'line',
      data: {
        labels: label,
        datasets: [
          {
            data: data,
            borderColor: color,
            fill: false
          },
        ]
      },
      options: {
        title: {
          display: true,
          text: title
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        },
      }
    });
  }

  addDataPoint(chartData, data, label): void {
    chartData.data.labels.push(label);
    chartData.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chartData.update();
  }

  ngOnInit(): void {
    this.appService.fetchCoinChart(this.coins, this.selectedLimit).subscribe((response) => {
      this.initializeChartObjects();
      response.forEach((chart, index) => {
        this.lineChart = this.lineCharts[index];
        this.lineChart.chartData = this.createLineChart(this.lineChart.ref, chart.price, chart.label, this.lineChart.color, chart.coin_name)
      });
      this.appService.updateCoinChart(this.coins, this.updateLimit).subscribe(response => {
        response.forEach((chart, index) => {
          this.lineChart = this.lineCharts[index];
          this.addDataPoint(this.lineChart.chartData, chart.price[0], chart.label[0]);
        })
      })
    });
  }

  changeGraphLimit(): void {
    this.appService.fetchCoinChart(this.coins, this.selectedLimit).subscribe((response) => {
      response.forEach((chart, index) => {
        this.lineChart = this.lineCharts[index];
        this.lineChart.chartData.data.labels = chart.label;
        this.lineChart.chartData.data.datasets[0].data = chart.price;
        this.lineChart.chartData.update();
      });
    })
  }
}
