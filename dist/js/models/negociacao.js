var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { InspectMethod } from "../src/decorators/inspect-method.js";
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
    parseText() {
        return `
      Data: ${this._data}
      Quantidade: ${this._quantidade}
      Valor ${this._valor}
    `;
    }
    isEqual(negociacao) {
        return this._data.getDate() === negociacao.data.getDate()
            && this._data.getMonth() === negociacao.data.getMonth()
            && this._data.getFullYear() === negociacao.data.getFullYear();
    }
}
__decorate([
    InspectMethod()
], Negociacao, "parseNegotiation", null);
