import { View } from "./view.js";
export class NegociacoesView extends View {
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
                <td>${this.parseDate(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
        }).join(' ')}
        </tbody>
      </table>
    `;
    }
    parseDate(date) {
        return new Intl.DateTimeFormat()
            .format(date);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
