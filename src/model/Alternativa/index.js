export default class Alternativa {
  constructor(id: string, isVerdadeiro: boolean, texto: string) {
    this.id = id;
    this.isVerdadeiro = isVerdadeiro;
    this.texto = texto;
  }

  id: string;

  isVerdadeiro: boolean;

  texto: string;
}
