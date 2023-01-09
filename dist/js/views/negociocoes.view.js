export class NegociacoesView {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    template() {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
    }
    update() {
        this.element.innerHTML = this.template();
    }
}
