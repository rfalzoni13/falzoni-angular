import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, BorderDirective, TextColorDirective } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ChartType } from 'chart.js';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'component-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  @Input("type") type!: ChartType
  @Input("title") title!: string
  @Input("subtitle") subtitle!: any
  @Input("color") color: any
  @Input("dataChart") dataChart: any

  colors: any[] = []
  data: any = {}
  #timeoutID: ReturnType<typeof setTimeout> | undefined = undefined
  readonly #destroyRef = inject(DestroyRef)

  constructor(private colorService: ColorService) {
    this.#destroyRef.onDestroy(() => {
      clearTimeout(this.#timeoutID);
    });
  }

  ngOnInit(): void {
    this.loadColors()
    this.loadChart()
  }

  private loadColors() {
    this.colors = this.colorService.loadChartColors()
  }

  private loadChart(): void {
    this.data = {
      labels: this.dataChart.cols,
      datasets: this.loadChartByType()
    }
  }

  // Load Chart Data
  private loadChartByType(): any {
    switch (this.type) {
      case "line":
        return this.loadLineChart()
      case "radar":
        return this.loadRadatChart()
      default:
        return this.loadBarChart()
    }
  }

  private loadLineChart(): any {
    return this.dataChart.sets.map((l: any, i: number) => {
      return {
        label: l.title,
        backgroundColor: this.colors[i].lineColor,
        borderColor: this.colors[i].borderColor,
        pointBackgroundColor: this.colors[i].pointColor,
        pointBorderColor: '#fff',
        data: l.data
      }
    })
  }

  private loadBarChart(): any {
    return this.dataChart.sets.map((l: any, i: number) => {
      return {
        label: l.title,
        backgroundColor: this.colors[i].lineColor,
        pointBorderColor: '#fff',
        data: l.data
      }
    })
  }

  private loadRadatChart(): any {
    return this.dataChart.sets.map((l: any, i: number) => {
      return {
        label: l.title,
        backgroundColor: this.colors[i].lineColor,
        borderColor: this.colors[i].borderColor,
        pointBackgroundColor: this.colors[i].pointColor,
        pointBorderColor: '#fff',
        pointHighlightStroke: this.colors[i].pointColor,
        data: l.data
      }
    })
  }
}
