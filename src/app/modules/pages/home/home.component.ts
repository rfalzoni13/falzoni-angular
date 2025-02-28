import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  categoryChart: any
  productChart: any
  serviceChart: any

  constructor() {
    this.loadLineChart()
    this.loadBarChart()
    this.loadRadarChart()
  }

  //private methods
  private loadLineChart() {
    this.categoryChart = {
      type: "line",
      title: "Categorias",
      subtitle: "Relação de vendas por categoria",
      color: "info",
      dataChart: {
        cols: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        sets: [
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
    this.productChart = {
      type: "bar",
      title: "Produtos",
      subtitle: "Relação de vendas por produto",
      color: "success",
      dataChart: {
        cols: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        sets: [
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

  private loadRadarChart() {
    this.serviceChart = {
      type: "radar",
      title: "Status de Serviços",
      subtitle: "Relação de status de serviços dos contratos",
      color: "danger",
      dataChart: {
        cols: ['Em Análise', 'Aberto', 'Pendente', 'Em Revisão', 'Finalizado', 'Cancelado'],
        sets: [
          {
            title: 'Contrato 1035 - AIRBAG S.A.',
            data: [10, 1, 3, 5, 40, 3]
          },
          {
            title: 'Contrato 442 - CAVALEIROS DE ATENA',
            data: [2, 5, 1, 3, 50, 10]
          },
          {
            title: 'Contrato 4505 - MANUTENCAO COMPUTADORES LTDA.',
            data: [1, 5, 14, 3, 20, 1]
          }
        ]
      }
    }
  }
}
