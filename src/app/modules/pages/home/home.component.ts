import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  dataChartLine: any
  dataChartBar: any

  constructor() {
    this.loadLineChart()
    this.loadBarChart()
  }

  //private methods
  private loadLineChart() {
    this.dataChartLine = {
      title: "Relação de vendas por categoria",
      color: "info",
      dataChart: {
        cols: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        lines: [
          {
            title: 'Games',
            data: [40, 20, 12, 39, 10, 80, 40]
          },
          {
            title: 'Informática',
            data: [50, 12, 28, 29, 7, 25, 60]
          },
          {
            title: 'Acessórios',
            data: [30, 25, 17, 45, 3, 22, 25]
          }
        ]
      }
    }
  }

  private loadBarChart() {
    this.dataChartBar = {
      title: "Relação de vendas por produto",
      color: "success",
      dataChart: {
        cols: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        bars: [
          {
            title: 'Super Nintendo',
            data: [40, 20, 12, 39, 10, 80, 40]
          },
          {
            title: 'Master System',
            data: [30, 58, 65, 14, 25, 30, 35]
          }
        ]
      }
    }
  }
}
