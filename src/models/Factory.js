import TransactionsMemModel from "./DAO/transactions.models.mem.js";

class Factory {
  static get(persistencia) {
    switch (persistencia) {
      case "MEM":
        console.warn("Persistencia en memoria del servidor.");
        return new TransactionsMemModel();
      default:
        console.warn("Persistencia en default (memoria).");
        return new TransactionsMemModel();
    }
  }
}

export default Factory;
