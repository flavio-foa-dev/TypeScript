export class NegociacoesView {

  private element: HTMLElement;

  constructor(select: string) {
    this.element = document.querySelector(select);
  }

  template(): string {
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

  update(): void {
    this.element.innerHTML = this.template()
  }
}