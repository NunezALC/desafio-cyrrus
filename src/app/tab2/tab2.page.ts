import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonItem, IonSelect, IonSelectOption, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { VaccineService } from '../vaccine';
import { Child } from '../vaccine.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList
  ]
})
export class Tab2Page implements OnInit {
  children: Child[] = [];
  selectedChild: Child | null = null;

  constructor(private vaccineService: VaccineService) {}

  ngOnInit() {
    this.children = this.vaccineService.getChildren();
    if (this.children.length > 0) {
      this.selectedChild = this.children[0];
    }
  }

  onChildChange(event: any) {
    const childId = event.detail.value;
    // CORRIGIDO: Atribuindo o dependente encontrado de volta à variável da tela
    this.selectedChild = this.children.find(c => c.id === childId) || null;
  }

  // Atualizado para retornar as cores hexadecimais oficiais da Cyrrus
  getCustomStatusColor(status: string): string {
    switch (status?.toUpperCase()) {
      case 'REALIZADA':
        return '#ABC270'; // Verde Oliva oficial
      case 'ATRASADA':
        return '#FDA769'; // Laranja oficial
      case 'PENDENTE':
        return '#FEC868'; // Amarelo oficial
      default:
        return '#7A6F66'; // Cinza/Marrom auxiliar para imprevistos
    }
  }
}