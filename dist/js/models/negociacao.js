export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
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
    static parseNegotiation(dateNegotiation, quantityNegotiation, priceNegotiation) {
        const exp = /-/g;
        const date = new Date(dateNegotiation.replace(exp, ','));
        const quantity = parseInt(quantityNegotiation);
        const value = parseFloat(priceNegotiation);
        return new Negociacao(date, quantity, value);
    }
}
