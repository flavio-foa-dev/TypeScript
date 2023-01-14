import { DayWeek } from "../enums/days-week.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { SelectorDom } from "../src/decorators/getSelectorDom.js";
import { InspectMethod } from "../src/decorators/inspect-method.js";
import { TempExecution } from "../src/decorators/temp-execution.js";
import { MessageView } from "../views/message.view.js";
import { NegociacoesView } from "../views/negociocoes.view.js";

export class NegociacaoController {

  @SelectorDom('#data')
  private inputDate: HTMLInputElement;

  @SelectorDom('#quantidade')
  private inputQuantity: HTMLInputElement;

  @SelectorDom('#valor')
  private inputValue: HTMLInputElement;

  private negociacoes: NegociacoesModel = new NegociacoesModel();
  private negociacoesView = new NegociacoesView('#negotiationView');
  private messageView = new MessageView('#message-view');


  constructor(){

    this.negociacoesView.update(this.negociacoes);
  }

  private isDayValid(date: Date): boolean {
    return date.getDay() > DayWeek.SUNDAY
      && date.getDay() < DayWeek.SATURDAY;
  }

  @TempExecution()
  @InspectMethod()
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

  public imporData(): void {
    alert("Impor data")
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