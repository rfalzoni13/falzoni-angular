import { Component } from '@angular/core';
import { FooterComponent as FooterCoreUIComponent } from '@coreui/angular';

@Component({
  selector: 'app-footer',
  imports: [
    FooterCoreUIComponent
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  
}
