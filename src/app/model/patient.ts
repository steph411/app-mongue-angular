export class Patient {
  // **************************** parametres administratifs ******************************
  code: number;
  cni: number;
  noms: string;
  prenoms: string;
  datecreation: Date;
  dateNaissance: Date;
  profession: string;
  quartier: string;
  ville: string;
  pays: string;
  telephone: number;
  email: string;

  // **************************** parametres cliniques ******************************
  age: number;
  taille: number;
  poids: number;
  statut: string;
  religion: string;
  lateralite: string;
  sexe: string;
  active: boolean;
}
