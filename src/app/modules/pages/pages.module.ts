import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GridModule } from '@coreui/angular';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GridModule
  ],
})
export class PagesModule { }
