import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type ProductKey = 'host-hub' | 'esteira-producao';

type ProductDetails = {
  slug: ProductKey;
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  highlights: string[];
};

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  slug: ProductKey | '' = '';
  product?: ProductDetails;

  activeIndex = 0;

  private catalog: Record<ProductKey, ProductDetails> = {
    'host-hub': {
      slug: 'host-hub',
      name: 'Host Hub',
      subtitle: 'Reservas e gestão para host',
      description:
        'Centralize reservas, controle disponibilidade e simplifique o atendimento. Feito para operação de hospedagem.',
      images: [
        'products/host-hub.png',
        'products/host-hub-2.png',
        'products/host-hub-3.png',
        'products/host-hub-4.png',
      ],
      highlights: ['Reservas e disponibilidade', 'Checkout otimizado', 'Painel do host'],
    },
    'esteira-producao': {
      slug: 'esteira-producao',
      name: 'Esteira de Produção',
      subtitle: 'Processos, cards e rastreabilidade',
      description:
        'Organize o fluxo do time com status, histórico e visibilidade total. Para operações que precisam de controle.',
      images: [
        'products/esteira-producao.png',
        'products/esteira-producao-2.png',
        // 'products/esteira-producao-3.png',
        // 'products/esteira-producao-4.png',
      ],
      highlights: ['Kanban por etapas', 'Histórico e rastreio', 'Permissões por time'],
    },
  };

  constructor(private route: ActivatedRoute) {
    const raw = this.route.snapshot.paramMap.get('slug') || '';
    this.slug = (raw as ProductKey) || '';
    this.product = this.catalog[this.slug as ProductKey];
  }

  get currentImage(): string {
    return this.product?.images?.[this.activeIndex] || '';
  }

  prev() {
    if (!this.product) return;
    this.activeIndex = (this.activeIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  next() {
    if (!this.product) return;
    this.activeIndex = (this.activeIndex + 1) % this.product.images.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }
}
