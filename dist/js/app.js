import { NegociacaoController } from './controllers/negociacao-controller.js';
const neg1 = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    neg1.save();
});
