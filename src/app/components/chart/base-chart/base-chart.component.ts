import { Component, DestroyRef, inject, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { ColorService } from 'src/app/services/color.service';

@Component({
  template: ``
})
export abstract class BaseChartComponent {
  @Input("title") title: any
  @Input("color") color: any
  @Input("dataChart") dataChart: any
  
  protected type!: ChartType
  readonly #destroyRef = inject(DestroyRef)
  protected data: any = {}
  protected timeoutID: ReturnType<typeof setTimeout> | undefined = undefined

  constructor(colorService: ColorService) {
    this.#destroyRef.onDestroy(() => {
      clearTimeout(this.timeoutID);
    });
  }

  protected abstract loadChart(): void 
}