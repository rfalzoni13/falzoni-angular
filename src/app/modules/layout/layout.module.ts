import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CardModule, SidebarModule, ButtonModule, GridModule, HeaderModule, FooterModule, ImgModule, BreadcrumbModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AppRoutingModule,
    BreadcrumbModule,
    CommonModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    GridModule,
    HeaderModule,
    FooterModule,
    ImgModule,
    IconModule,
    HeaderComponent,
    FooterComponent
],
  bootstrap: [AdminComponent],
  exports: [AdminComponent]
})
export class LayoutModule { }
