import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type SubscriptionStatus = 'TRIAL' | 'ACTIVE' | 'PAST_DUE' | 'CANCELED';

interface ActiveProduct {
  code: 'HOSTHUB' | 'ESTEIRAPRODUCAO';
  name: string;
  plan: string;
  status: SubscriptionStatus;
}

interface InvoiceItem {
  id: string;
  date: string;     // depois vira Date
  amount: number;   // depois vira cents
  status: 'PENDING' | 'PAID' | 'OVERDUE';
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // mock do usuário/empresa (futuro: vem do backend)
  orgName = 'Conta de Demonstração';

  // mock assinatura
  subscriptionStatus: SubscriptionStatus = 'TRIAL';
  trialDaysLeft = 7;

  activeProducts: ActiveProduct[] = [
    { code: 'HOSTHUB', name: 'Host-hub', plan: 'Starter', status: 'TRIAL' },
    { code: 'ESTEIRAPRODUCAO', name: 'Esteira-producao', plan: 'Starter', status: 'INACTIVE' as any }, // ainda não assinado
  ];

  invoices: InvoiceItem[] = [
    { id: 'INV-0001', date: '2026-02-10', amount: 99.0, status: 'PENDING' },
    { id: 'INV-0000', date: '2026-01-10', amount: 99.0, status: 'PAID' },
  ];

  get statusLabel(): string {
    switch (this.subscriptionStatus) {
      case 'TRIAL': return `Teste grátis • ${this.trialDaysLeft} dias restantes`;
      case 'ACTIVE': return 'Assinatura ativa';
      case 'PAST_DUE': return 'Pagamento pendente';
      case 'CANCELED': return 'Assinatura cancelada';
      default: return '—';
    }
  }

  get statusBadgeClass(): string {
    switch (this.subscriptionStatus) {
      case 'TRIAL': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'ACTIVE': return 'bg-green-50 text-green-700 border-green-200';
      case 'PAST_DUE': return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'CANCELED': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  }

  invoiceStatusClass(s: InvoiceItem['status']): string {
    switch (s) {
      case 'PAID': return 'bg-green-50 text-green-700 border-green-200';
      case 'PENDING': return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'OVERDUE': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  }
}
