import { Negociacao } from "./negociacao.js";

export class NegociacoesModel {
  private data: Array<Negociacao> = new Array()

  public saveTransaction(negociacao: Negociacao): void {
    this.data.push(negociacao);
  }
  // readonly Negociacao[]
  public getAllTransaction(): ReadonlyArray<Negociacao> {
    //return this.data;
    return [...this.data]
  }
}