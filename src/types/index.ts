export type Class = {
  id: number;
  nome: string;
  turno: string;
  anoLetivo: string;
  escolaId: number;
};

export type School = {
  id: number;
  nome: string;
  endereco: string;
  turmas?: Class[];
};
