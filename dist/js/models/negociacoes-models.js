export class NegociacoesModel {
    constructor() {
        this.data = new Array();
    }
    saveTransaction(negociacao) {
        this.data.push(negociacao);
    }
    // readonly Negociacao[]
    getAllTransaction() {
        //return this.data;
        return [...this.data];
    }
}
