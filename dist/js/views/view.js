export class View {
    constructor(selector) {
        const resultSelector = document.querySelector(selector);
        if (resultSelector) {
            this.element = resultSelector;
        }
        else {
            throw new Error(`selector ${selector} not found`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
