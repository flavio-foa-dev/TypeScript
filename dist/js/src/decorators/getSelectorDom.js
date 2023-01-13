export function SelectorDom(selector) {
    return function (target, propertykey) {
        console.log(`modificando prototype ${target.constructor.name} add uma function para a propiedade ${propertykey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`busca ${selector} no DOM e add ${propertykey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
