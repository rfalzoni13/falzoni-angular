import { Component, input } from '@angular/core';
import { cilMenu } from '@coreui/icons';
import { ButtonDirective, ContainerComponent, HeaderComponent as HeaderCoreUIComponent, HeaderNavComponent, SidebarToggleDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-header',
  imports: [
    HeaderCoreUIComponent,
    ButtonDirective,
    SidebarToggleDirective,
    ContainerComponent,
    HeaderNavComponent,
    IconDirective
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
    icons = { cilMenu }
    sidebarId = input('sidebar1')
}
