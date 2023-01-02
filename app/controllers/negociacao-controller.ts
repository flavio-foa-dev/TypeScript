import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
  private inputData
  private inputQuantidade
  private inputValor

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  save(){
    const neg1 = new Negociacao(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
      )
    console.log(neg1)
    console.log(neg1.volume)
  }
}