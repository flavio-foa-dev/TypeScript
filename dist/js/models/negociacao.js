export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor : number;
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        //defensiva
        const date = new Date(this._data.getTime());
        return date;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
