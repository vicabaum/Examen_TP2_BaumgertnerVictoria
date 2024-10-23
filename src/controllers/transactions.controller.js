import TransactionsService from "../services/transactions.service.js";

class TransactionsController {
  constructor() {
    this.service = new TransactionsService();
  }

  getTransactions = async (req, res) => {
    try {
      const transactions = await this.service.getTransactions();
      
      if (!transactions || Object.keys(transactions).length === 0) {
        return res.status(404).json({ message: "No se encontraron transacciones." });
      }
      
      res.json(transactions);
    } catch (error) {
      console.error("Error al obtener transacciones:", error);
      res.status(500).json({ message: "Error" });
    }
  };
  
  postTransaction = async (req, res) => {
    const data = req.body;
    const newTransaction = await this.service.postTransaction(data);
    res.json(newTransaction);
  };

  getTransactionCount = async (req, res) => {
    const count = await this.service.getTransactionCount();
    res.json({ message: "Cantidad de transacciones", transactions: count });
  };

  deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const result = await this.service.deleteTransaction(id);
    res.json(result);
  };
}

export default TransactionsController;
