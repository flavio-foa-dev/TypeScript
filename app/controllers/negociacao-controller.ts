import { Negociacao } from "../models/negociacao.js"
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { NegociacoesView } from "../views/negociocoes.view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: NegociacoesModel = new NegociacoesModel();
  private negociacoesView = new NegociacoesView('#negotiationView')

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
    this.negociacoesView.update(this.negociacoes)
  }

  save(): void {
    const negociacao = this.create()
    this.negociacoes.saveTransaction(negociacao)
    this.negociacoesView.update(this.negociacoes)
    console.log('oi', this.negociacoes.getAllTransaction())
    this.cleanForm()
  }

  create(): Negociacao {
    const exp: RegExp = /-/g
    const data = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

   return  new Negociacao(data, quantidade, valor)

  }

  cleanForm(): void {
    this.inputData.value = ""
    this.inputQuantidade.value = ""
    this.inputValor.value = ""
    this.inputData.focus()
    console.log('cleanForm')
  }
}