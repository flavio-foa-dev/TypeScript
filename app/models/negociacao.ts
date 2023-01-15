import { ToCompare } from "../interface/to-compare.js";
import { InspectMethod } from "../src/decorators/inspect-method.js";

export class Negociacao implements ToCompare<Negociacao> {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor : number;

  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
    ) {}

  get data(): Date {
    //defensiva
    const date = new Date(this._data.getTime());
    return date
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor
  }

  @InspectMethod()
  public static parseNegotiation(
    dateNegotiation: string,
    quantityNegotiation:string,
    priceNegotiation:string ): Negociacao {

     const exp = /-/g;
     const date = new Date(dateNegotiation.replace(exp, ','));
     const quantity = parseInt(quantityNegotiation)
     const value = parseFloat(priceNegotiation)

     return new Negociacao(date, quantity, value)
  }

  parseText(): string {
    return `
      Data: ${this._data}
      Quantidade: ${this._quantidade}
      Valor ${this._valor}
    `;
  }

  public isEqual(negociacao: Negociacao): boolean {
    return this._data.getDate() === negociacao.data.getDate()
      && this._data.getMonth() === negociacao.data.getMonth()
      && this._data.getFullYear() === negociacao.data.getFullYear()
  }

}
