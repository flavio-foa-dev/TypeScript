import { DayWeek } from "../enums/days-week.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { MessageView } from "../views/message.view.js";
import { NegociacoesView } from "../views/negociocoes.view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: NegociacoesModel = new NegociacoesModel();
  private negociacoesView = new NegociacoesView('#negotiationView');
  private messageView = new MessageView('#message-view');


  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  private isDayValid(date: Date): boolean {
    return date.getDay() > DayWeek.SUNDAY
      && date.getDay() < DayWeek.SATURDAY;
  }

  public save(): void {
    const negociacao = this.create();
    if (!this.isDayValid(negociacao.data)) {
      return this.messageView.update("Movimentacoes somente em dias uteis")
    }

    this.negociacoes.saveTransaction(negociacao);
    this.upadateViews()
    this.cleanForm();
  }

  private create(): Negociacao {
    const exp: RegExp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

   return  new Negociacao(data, quantidade, valor);

  }

  private cleanForm(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private upadateViews(): void {
    this.negociacoesView.update(this.negociacoes);
    this.messageView.update("Adicionado com sucesso!");
  }
}