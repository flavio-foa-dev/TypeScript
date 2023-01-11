export class NegociacoesModel {
    constructor() {
        this.data = new Array();
    }
    saveTransaction(negociacao) {
        this.data.push(negociacao);
    }
    getAllTransaction() {
        return [...this.data];
    }
}
