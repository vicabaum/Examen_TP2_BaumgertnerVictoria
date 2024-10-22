import express from "express";
import TransactionsRoute from "./src/routes/transactions.route.js"

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", new TransactionsRoute().start());

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));

app.on("error", (err) => console.error(err));
