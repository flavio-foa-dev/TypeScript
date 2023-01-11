export abstract class View<T> {

  protected element: HTMLElement;

  constructor(selector: string) {
    const resultSelector = document.querySelector(selector)

    if(resultSelector){
      this.element = resultSelector as HTMLElement
    } else {
      throw new Error(`selector ${selector} not found`)
    }
  }

  protected abstract template(model: T): string

  public update(model : T): void{
    const template = this.template(model)
    this.element.innerHTML = template
  }


}