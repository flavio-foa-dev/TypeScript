export class NegociacoesView {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    template(model) {
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
          ${model.getAllTransaction().map((negociacao) => {
            return `
              <tr>
                <td>${negociacao.data}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
        }).join('')}
        </tbody>
      </table>
    `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
