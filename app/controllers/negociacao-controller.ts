import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  save(): void {
    const neg1 = this.create()
    console.log(neg1)
    console.log(neg1.volume)
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