import { DayWeek } from "../enums/days-week.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { MessageView } from "../views/message.view.js";
import { NegociacoesView } from "../views/negociocoes.view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new NegociacoesModel();
        this.negociacoesView = new NegociacoesView('#negotiationView');
        this.messageView = new MessageView('#message-view');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    isDayValid(date) {
        return date.getDay() > DayWeek.SUNDAY
            && date.getDay() < DayWeek.SATURDAY;
    }
    add() {
        const negociacao = Negociacao.parseNegotiation(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isDayValid(negociacao.data)) {
            return this.messageView.update("Movimentacoes somente em dias uteis");
        }
        this.negociacoes.saveTransaction(negociacao);
        this.upadateViews();
        this.cleanForm();
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    upadateViews() {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Adicionado com sucesso!");
    }
}
