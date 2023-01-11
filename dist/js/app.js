import { NegociacaoController } from './controllers/negociacao-controller.js';
const transaction = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    transaction.add();
});
