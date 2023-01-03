export class NegociacoesModel {
    constructor() {
        this.data = new Array();
    }
    save(negociacao) {
        this.data.push(negociacao);
    }
    getAll() {
        return this.data;
    }
}
