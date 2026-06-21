import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // Importa a função que registra os ícones
import { document, medkit } from 'ionicons/icons'; // Importa os ícones que você escolheu

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    // REGISTRA OS ÍCONES AQUI: Isso faz o Ionic carregar os desenhos na tela!
    addIcons({ document, medkit });
  }
}