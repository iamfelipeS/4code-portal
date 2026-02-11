import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProductCard = {
  name: string;
  slug: 'host-hub' | 'esteira-producao';
  subtitle: string;
  description: string;
  thumbnail: string;
  badges: string[];
  highlights: string[];
};

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: ProductCard[] = [
    {
      name: 'Host Hub',
      slug: 'host-hub',
      subtitle: 'Reservas e gestão para host',
      description:
        'Centralize reservas, controle disponibilidade e simplifique o atendimento. Feito para operação de hospedagem.',
      thumbnail: 'products/host-hub.png',
      badges: ['Mais procurado', 'Ideal para começar'],
      highlights: ['Reservas e disponibilidade', 'Checkout otimizado', 'Painel do host'],
    },
    {
      name: 'Esteira de Produção',
      slug: 'esteira-producao',
      subtitle: 'Processos, cards e rastreabilidade',
      description:
        'Organize o fluxo do time com status, histórico e visibilidade total. Para operações que precisam de controle.',
      thumbnail: 'products/esteira-producao.png',
      badges: ['Operação', 'Times'],
      highlights: ['Kanban por etapas', 'Histórico e rastreio', 'Permissões por time'],
    },
  ];
}
