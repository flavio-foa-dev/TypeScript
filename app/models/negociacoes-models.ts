import { Negociacao } from "./negociacao.js";

export class NegociacoesModel {
  private data: Array<Negociacao> = new Array()

  public save(negociacao: Negociacao): void {
    this.data.push(negociacao);
  }

  public getAll(): Array<Negociacao> {
    return this.data
  }
}