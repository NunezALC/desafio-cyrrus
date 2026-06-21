import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { VaccineService } from '../vaccine';
import { Campaign } from '../vaccine.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
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
    IonBadge
  ]
})
export class Tab1Page implements OnInit {
  campaigns: Campaign[] = [];

  constructor(private vaccineService: VaccineService) {}

  ngOnInit() {
    this.campaigns = this.vaccineService.getCampaigns();
  }
}