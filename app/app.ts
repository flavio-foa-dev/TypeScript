import { NegociacaoController } from './controllers/negociacao-controller.js';


const transaction = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    transaction.add()
  });
} else {
  throw new Error("Nao foi posssil encontar .form ao inicializar aplicacao")
}


