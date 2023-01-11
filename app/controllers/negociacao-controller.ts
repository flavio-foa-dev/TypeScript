import { DayWeek } from "../enums/days-week.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { MessageView } from "../views/message.view.js";
import { NegociacoesView } from "../views/negociocoes.view.js";

export class NegociacaoController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociacoes: NegociacoesModel = new NegociacoesModel();
  private negociacoesView = new NegociacoesView('#negotiationView');
  private messageView = new MessageView('#message-view');


  constructor(){
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  private isDayValid(date: Date): boolean {
    return date.getDay() > DayWeek.SUNDAY
      && date.getDay() < DayWeek.SATURDAY;
  }

  public add(): void {
    const negociacao = Negociacao.parseNegotiation(
       this.inputDate.value,
       this.inputQuantity.value,
       this.inputValue.value
    );

    if (!this.isDayValid(negociacao.data)) {
      return this.messageView.update("Movimentacoes somente em dias uteis")
    }

    this.negociacoes.saveTransaction(negociacao);
    this.upadateViews()
    this.cleanForm();
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private upadateViews(): void {
    this.negociacoesView.update(this.negociacoes);
    this.messageView.update("Adicionado com sucesso!");
  }
}