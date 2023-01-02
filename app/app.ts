import { NegociacaoController } from './controllers/negociacao-controller.js';

const neg1 = new NegociacaoController()
const form: Element = document.querySelector('.form')

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  neg1.save()
})
