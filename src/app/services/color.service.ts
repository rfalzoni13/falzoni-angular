import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  #chartColors: any[] = []

  loadChartColors(): any[] {
    this.#chartColors = [
      {
        lineColor: 'rgba(226, 49, 49, 0.63)',
        borderColor: 'rgb(255, 92, 92)',
        pointColor: 'rgb(255, 44, 44)'
      },
      {
        lineColor: 'rgba(16, 165, 3, 0.2)',
        borderColor: 'rgb(159, 247, 156)',
        pointColor: 'rgb(58, 219, 80)',
      },
      {
        lineColor: 'rgba(92, 89, 255, 0.72)',
        borderColor: 'rgb(135, 118, 231)',
        pointColor: 'rgb(54, 9, 255)',
      },
      {
        lineColor: 'rgba(212, 255, 22, 0.72)',
        borderColor: 'rgb(242, 250, 134)',
        pointColor: 'rgb(255, 251, 0)',
      },
      {
        lineColor: 'rgba(209, 209, 209, 0.72)',
        borderColor: 'rgb(209, 209, 209)',
        pointColor: 'rgb(110, 110, 110)',
      }
    ]

    return this.#chartColors
  }
}
