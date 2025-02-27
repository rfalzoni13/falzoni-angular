import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GridModule, TextColorDirective } from '@coreui/angular';
import { InlineChartComponent } from 'src/app/components/chart/inline-chart/inline-chart.component';
import { BarChartComponent } from 'src/app/components/chart/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TextColorDirective,
    GridModule,
    InlineChartComponent,
    BarChartComponent
],
})
export class PagesModule { }
