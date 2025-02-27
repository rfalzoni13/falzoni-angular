import { Component, OnInit } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ColorService } from 'src/app/services/color.service';
import { CardBodyComponent, CardComponent, CardHeaderComponent, BorderDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'component-bar-chart',
  imports: [
    ChartjsComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    BorderDirective,
    TextColorDirective
  ],
  templateUrl: '../base-chart/base-chart.component.html'
})
export class BarChartComponent extends BaseChartComponent implements OnInit {
  constructor(private colorService: ColorService) {
    super(colorService)
    this.type = 'bar'
  }

  ngOnInit(): void {
    this.loadChart()
  }

  protected override loadChart(): void {
    const colors = this.colorService.loadBarChartColors()

    this.data = {
      labels: this.dataChart.cols,
      datasets: this.dataChart.bars.map((l: any, i: number) => {
        return {
          label: l.title,
          backgroundColor: colors[i].color,
          data: l.data,
        }
      })
    }
  }
}
