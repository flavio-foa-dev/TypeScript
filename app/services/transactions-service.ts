import { IimportTransactionsDay } from "../interface/IimportDataDay.js";
import { Negociacao } from "../models/negociacao.js";

export class TransactionService{

  public async importTransactionDay(): Promise<any> {
    try {
      const response = await fetch('http://localhost:8080/dados');
      const data = await response.json();
      return data.map((item: IimportTransactionsDay) => {
        return new Negociacao(
          new Date(),
          item.vezes,
          item.montante
        );
      });
    } catch (error) {
        console.log('Not found', error.message);
    }
  }

}