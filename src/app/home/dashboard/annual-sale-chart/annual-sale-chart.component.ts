import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-annual-sale-chart',
  templateUrl: './annual-sale-chart.component.html',
  styleUrls: ['./annual-sale-chart.component.scss'],
})
export class AnnualSalesChartComponent implements OnInit {
  errorMessage: string;

  public salesChartData: ChartDataset[] = [{ data: [], label: 'Total Sales' }];


  public salesChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public salesChartLegend = true;
  public salesChartType: ChartType = 'line';
  public salesChartPlugins = [];

  @ViewChild('annualSaleChart') private canvas: ElementRef;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // this.dashboardService.getSalesByMonth().subscribe({
    //   next: (salesItems) => {
    //     console.log(salesItems);
    //     salesItems.forEach((li) => {
    //       this.salesChartData[0].data.push(li.revenue);
    //     });
    //   },
    //   error: (err) => (this.errorMessage = err),
    // });
  }
}
