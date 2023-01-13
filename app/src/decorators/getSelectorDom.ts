export function SelectorDom(selector: string) {
  return function(target: any, propertykey: string) {
    console.log(`modificando prototype ${target.constructor.name} add uma function para a propiedade ${propertykey}`);
    let element: HTMLElement;

    const getter = function() {
      if (!element) {
        element = <HTMLElement> document.querySelector(selector);
        console.log(`busca ${selector} no DOM e add ${propertykey}`)
      }
      return element;
    }

    Object.defineProperty(
      target,
      propertykey,
      {get: getter}
    );
  }

}