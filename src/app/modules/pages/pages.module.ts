import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GridModule, TextColorDirective } from '@coreui/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TextColorDirective,
    GridModule,
    ComponentsModule,
],
})
export class PagesModule { }
