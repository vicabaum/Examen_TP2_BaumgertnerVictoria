class TransactionsMemModel {
    constructor() {
      this.transactions = [];
    }
  
    getTransactions = async () => {
      try {
        if (!this.transactions || this.transactions.length === 0) {
          throw new Error("No se encontraron transacciones.");
        }
  
        return this.transactions; 
      } catch (error) {
        console.error("Error en getTransactions:", error);
        throw error; 
      }
    };
  
    postTransaction = async (data) => {
      const newTransaction = {
        id: this.transactions.length + 1, 
        ...data
      };
      this.transactions.push(newTransaction);
      return newTransaction;
    };
  
    getTransactionCount = async () => {
      return this.transactions.length;
    };
  
    deleteTransaction = async (id) => {
      const index = this.transactions.findIndex(trans => trans.id === parseInt(id));
      if (index !== -1) {
        this.transactions.splice(index, 1);
        return { message: "Transacción eliminada exitosamente! :)" };
      } else {
        return { message: "Transacción no encontrada" };
      }
    };
  }
  
  export default TransactionsMemModel;
  