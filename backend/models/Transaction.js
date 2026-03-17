const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;