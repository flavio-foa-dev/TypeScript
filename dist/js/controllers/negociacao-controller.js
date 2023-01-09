import { Negociacao } from "../models/negociacao.js";
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { NegociacoesView } from "../views/negociocoes.view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new NegociacoesModel();
        this.negociacoesView = new NegociacoesView('#negotiationView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    save() {
        const negociacao = this.create();
        this.negociacoes.saveTransaction(negociacao);
        this.negociacoesView.update(this.negociacoes);
        console.log('oi', this.negociacoes.getAllTransaction());
        this.cleanForm();
    }
    create() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    cleanForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
        console.log('cleanForm');
    }
}
