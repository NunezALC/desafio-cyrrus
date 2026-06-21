export type VaccineStatus = 'REALIZADA' | 'PENDENTE' | 'ATRASADA';

export interface Vaccine {
  id: string;
  name: string;
  description: string;
  dueDate: string;          // Formato YYYY-MM-DD para exibição nas telas
  status: VaccineStatus;
}

export interface Child {
  id: string;
  name: string;
  birthDate: string;        // Formato YYYY-MM-DD
  gender: 'M' | 'F';
  vaccines: Vaccine[];     // Cenário 4: Histórico individual por filho
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  targetAudience: string;  // Cenário 3: Público-alvo da campanha ativa
  endDate: string;
}