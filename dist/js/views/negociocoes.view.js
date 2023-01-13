var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ScanScriptInjector } from "../src/decorators/scanScriptInjection.js";
import { InspectMethod } from "../src/decorators/inspect-method.js";
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
__decorate([
    ScanScriptInjector
], NegociacoesView.prototype, "template", null);
__decorate([
    InspectMethod()
], NegociacoesView.prototype, "update", null);
