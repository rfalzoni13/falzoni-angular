import { Component, input, InputSignal, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {
  INavData,
} from '@coreui/angular';
import { cilMenu, cilPeople, cilStorage } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: false,
})
export class AdminComponent implements OnInit {
  navItems: INavData[] = []
  icons = { cilMenu }

  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilPeople, cilStorage }
  }

  ngOnInit(): void {
    this.loadSideBar()
  }

  // private METHODS
  private loadSideBar() {
    this.navItems = [
      {
        name: "Cadastro",
        title: true,
      },
      {
        name: "Clientes",
        url: "/clientes",
        iconComponent: { name: "cil-people" }
      },
      {
        name: "Comercial",
        title: true,
      },
      {
        name: "Estoque",
        url: "/#",
        iconComponent: { name: "cil-storage" },
        children: [
          {
            name: "Produtos",
            url: "/estoque/produtos",
            icon: "nav-icon-bullet"
          },
          {
            name: "Categorias",
            url: "/estoque/categorias",
            icon: "nav-icon-bullet"
          }
        ]
      },
    ]
  }
}
