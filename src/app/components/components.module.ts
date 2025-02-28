import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { CardModule, GridModule, UtilitiesModule } from '@coreui/angular';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    UtilitiesModule,
    GridModule,
    CommonModule,
    CardModule,
    ChartjsModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ComponentsModule { }
