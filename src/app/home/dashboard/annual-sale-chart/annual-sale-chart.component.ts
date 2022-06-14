import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-annual-sale-chart',
  templateUrl: './annual-sale-chart.component.html',
  styleUrls: ['./annual-sale-chart.component.scss'],
})
export class AnnualSalesChartComponent implements OnInit {
  errorMessage: string;

  public salesChartData: ChartDataSets[] = [{ data: [], label: 'Total Sales' }];

  public salesChartLabels: Label[] = [];

  public salesChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public salesChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(12, 202, 74,1)',
    },
  ];
  public salesChartLegend = true;
  public salesChartType: ChartType = 'line';
  public salesChartPlugins = [];

  @ViewChild('annualSaleChart') private canvas:ElementRef;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getSalesByMonth().subscribe({
      next: (salesItems) => {
        console.log(salesItems);
        salesItems.forEach((li) => {
          this.salesChartData[0].data.push(li.revenue);
          this.salesChartLabels.push(li.month);
        });
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
