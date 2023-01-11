import { NegociacaoController } from './controllers/negociacao-controller.js';


const transaction = new NegociacaoController()
const form: Element = document.querySelector('.form')

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  transaction.add()
})

