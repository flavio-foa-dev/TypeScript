import { NegociacaoController } from './controllers/negociacao-controller.js';

const transaction = new NegociacaoController();

const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    transaction.add()
  });
} else {
  throw new Error("Nao foi posssivel encontrar .form ao inicializar aplicacao")
};

const btnImpotData = document.querySelector('#btn-import');
if(btnImpotData) {
  btnImpotData.addEventListener("click",() => {
    transaction.importDataDay()

  })
} else {

  throw new Error("Nao foi posssivel encontrar .btn-import ao inicializar aplicacao")
}


