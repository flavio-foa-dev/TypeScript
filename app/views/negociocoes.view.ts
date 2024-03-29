
import { NegociacoesModel } from "../models/negociacoes-models.js";
import { ScanScriptInjector } from "../src/decorators/scanScriptInjection.js";
import {InspectMethod} from "../src/decorators/inspect-method.js";
import { View } from "./view.js";

export class NegociacoesView extends View<NegociacoesModel> {

  @ScanScriptInjector
  protected template(model:NegociacoesModel): string {
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

  private parseDate(date: Date): string {
    return new Intl.DateTimeFormat()
      .format(date)
  }

  @InspectMethod()
  update(model:NegociacoesModel): void {
    this.element.innerHTML = this.template(model)
  }
}