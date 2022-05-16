import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  exports: [],
  imports: [MaterialModule, CommonModule],
  declarations: [DashboardComponent, CardComponent],
})
export class DashboardModule {}
