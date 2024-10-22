import TransactionsController from "../controllers/transactions.controller.js";   
import express from "express";

class TransactionsRoute {
  constructor() {
    this.router = express.Router();
    this.controller = new TransactionsController();
  }

  start() {
    this.router.get("/transactions", this.controller.getTransactions);
    this.router.post("/transactions", this.controller.postTransaction);
    this.router.get("/transactions/count", this.controller.getTransactionCount);
    this.router.delete("/transactions/:id", this.controller.deleteTransaction);

    return this.router;
  }
}

export default TransactionsRoute;
