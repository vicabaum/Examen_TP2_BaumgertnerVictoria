import Factory from "../models/Factory.js";

class TransactionsService {
  constructor() {
    this.model = Factory.get("");  
  }

  getTransactions = async () => {
    const transactions = await this.model.getTransactions();
    return transactions;
  };

  postTransaction = async (data) => {
    const newTransaction = await this.model.postTransaction(data);
    return newTransaction;
  };

  getTransactionCount = async () => {
    const count = await this.model.getTransactionCount();
    return count;
  };

  deleteTransaction = async (id) => {
    const result = await this.model.deleteTransaction(id);
    return result;
  };
}

export default TransactionsService;
