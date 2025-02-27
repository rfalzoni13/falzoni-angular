import { Component, OnInit } from '@angular/core'
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ColorService } from 'src/app/services/color.service';
import { CardBodyComponent, CardComponent, CardHeaderComponent, BorderDirective, TextColorDirective } from '@coreui/angular';
import { plugins } from 'chart.js';

@Component({
  selector: 'component-inline-chart',
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
export class InlineChartComponent extends BaseChartComponent implements OnInit {
  constructor(private colorService: ColorService) {
    super(colorService)
    this.type = 'line'
  }
  ngOnInit(): void {
    this.loadChart()
  }

  protected override loadChart(): void {    
    const colors = this.colorService.loadLineChartColors()

    this.data = {
      labels: this.dataChart.cols,
      datasets: this.dataChart.lines.map((l: any, i: number) => {
        return {
          label: l.title,
          backgroundColor: colors[i].lineColor,
          borderColor: colors[i].borderColor,
          pointBackgroundColor: colors[i].pointColor,
          pointBorderColor: '#fff',
          data: l.data
        }
      })
    }
  }

  // Evento para atualizar dados
  // handleChartRef(event: any) {
  //   if (event) {
  //     console.log('handleChartRef', event);
  //     this.timeoutID = setTimeout(() => {
  //       super.loadChart()
  //       event?.update()
  //       this.timeoutID = undefined
  //     }, 500)
  //   }
  // }
}
