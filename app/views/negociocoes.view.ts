
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { View } from "./view.js";

export class NegociacoesView extends View<NegociacoesModel> {

  template(model:NegociacoesModel): string {
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
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
          }).join(' ')}
        </tbody>
      </table>
    `;
  }

  update(model:NegociacoesModel): void {
    this.element.innerHTML = this.template(model)
  }
}