var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { InspectMethod } from "../src/decorators/inspect-method.js";
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
__decorate([
    InspectMethod()
], View.prototype, "update", null);
