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
    this.selectedChild = this.children.find(c => c.id === childId) || null;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'REALIZADA': return 'success';
      case 'PENDENTE': return 'warning';
      case 'ATRASADA': return 'danger';
      default: return 'medium';
    }
  }
}