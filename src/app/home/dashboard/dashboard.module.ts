import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/shared/material.module';
import { AnnualSalesChartComponent } from './annual-sale-chart/annual-sale-chart.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  exports: [],
  imports: [
    MaterialModule,
    CommonModule,
    // ChartsModule
  ],
  declarations: [DashboardComponent, CardComponent, AnnualSalesChartComponent],
})
export class DashboardModule {}
