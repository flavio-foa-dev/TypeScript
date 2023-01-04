export class Negociacao {
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
}
