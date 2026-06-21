import { Injectable } from '@angular/core';
import { Child, Campaign } from './vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  // Cenário 3: Exibição de campanha de vacinação ativa para o público infantil
  private campaigns: Campaign[] = [
    {
      id: 'c1',
      title: 'Campanha Nacional de Gotinhas',
      description: 'Proteja o seu filho contra a Paralisia Infantil. Visite o posto de saúde mais próximo.',
      targetAudience: 'Crianças de 1 a 4 anos',
      endDate: '2026-07-22'
    }
  ];

  // Cenário 4: Família possui múltiplos filhos com históricos e idades diferentes
  private children: Child[] = [
    {
      id: '1',
      name: 'Pedro Nunes',
      birthDate: '2025-06-01',
      gender: 'M',
      vaccines: [
        // Cenário 1: Identificar facilmente vacinas já realizadas (Verde) e pendentes (Amarelo)
        { id: 'v1', name: 'BCG', description: 'Prevenção contra formas graves de tuberculose', dueDate: '2025-06-01', status: 'REALIZADA' },
        { id: 'v2', name: 'Meningocócica C (1ª Dose)', description: 'Proteção contra meningite C', dueDate: '2026-08-15', status: 'PENDENTE' }
      ]
    },
    {
      id: '2',
      name: 'Mariana Nunes',
      birthDate: '2023-01-10',
      gender: 'F',
      vaccines: [
        { id: 'v1', name: 'BCG', description: 'Prevenção contra formas graves de tuberculose', dueDate: '2023-01-10', status: 'REALIZADA' },
        // Cenário 2: Vacina possui data prevista já ultrapassada e não aplicada (Laranja)
        { id: 'v3', name: 'Tríplice Viral (D1)', description: 'Sarampo, caxumba e rubéola', dueDate: '2024-04-10', status: 'ATRASADA' }
      ]
    }
  ];

  constructor() { }

  getChildren(): Child[] {
    return this.children;
  }

  getCampaigns(): Campaign[] {
    return this.campaigns;
  }
}