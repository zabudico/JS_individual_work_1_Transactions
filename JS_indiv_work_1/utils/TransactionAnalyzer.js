// utils/TransactionAnalyzer.js

/**
 * Class representing a TransactionAnalyzer.
 */
class TransactionAnalyzer {
  /**
   * Create a TransactionAnalyzer.
   * @param {Array} transactions - The array of transactions.
   */
  constructor(transactions) {
    this.transactions = transactions;
  }

  /**
   * Add a transaction to the list of transactions.
   * @param {Object} transaction - The transaction to add.
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  /**
   * Get all transactions.
   * @returns {Array} All transactions.
   */
  getAllTransactions() {
    return this.transactions;
  }

  /**
   * Get unique transaction types.
   * @returns {Array} Unique transaction types.
   */
  getUniqueTransactionType() {
    const types = new Set();
    this.transactions.forEach((transaction) =>
      types.add(transaction.transaction_type)
    );
    return Array.from(types);
  }

  /**
   * Calculate the total amount of all transactions.
   * @returns {number} Total amount of all transactions.
   */
  calculateTotalAmount() {
    return this.transactions.reduce(
      (total, transaction) =>
        total + parseFloat(transaction.transaction_amount),
      0
    );
  }

  /**
   * Calculate the total amount of transactions for a specific date.
   * @param {number} year - The year.
   * @param {number} month - The month (1-12).
   * @param {number} day - The day (1-31).
   * @returns {number} Total amount of transactions for the specified date.
   */
  calculateTotalAmountByDate(year, month, day) {
    let total = 0;
    this.transactions.forEach((transaction) => {
      const date = new Date(transaction.transaction_date);
      if (
        (!year || date.getFullYear() === year) &&
        (!month || date.getMonth() === month - 1) &&
        (!day || date.getDate() === day)
      ) {
        total += parseFloat(transaction.transaction_amount);
      }
    });
    return total;
  }

  /**
   * Get transactions by type.
   * @param {string} type - The transaction type (debit or credit).
   * @returns {Array} Transactions of the specified type.
   */
  getTransactionByType(type) {
    return this.transactions.filter(
      (transaction) => transaction.transaction_type === type
    );
  }

  /**
   * Get transactions within a date range.
   * @param {Date} startDate - The start date of the range.
   * @param {Date} endDate - The end date of the range.
   * @returns {Array} Transactions within the specified date range.
   */
  getTransactionsInDateRange(startDate, endDate) {
    return this.transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.transaction_date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }

  /**
   * Get transactions by merchant name.
   * @param {string} merchantName - The name of the merchant.
   * @returns {Array} Transactions with the specified merchant name.
   */
  getTransactionsByMerchant(merchantName) {
    return this.transactions.filter(
      (transaction) => transaction.merchant_name === merchantName
    );
  }

  /**
   * Calculate the average transaction amount.
   * @returns {number} Average transaction amount.
   */
  calculateAverageTransactionAmount() {
    const totalAmount = this.calculateTotalAmount();
    const numTransactions = this.transactions.length;
    return totalAmount / numTransactions;
  }

  /**
   * Get transactions within a specified amount range.
   * @param {number} minAmount - The minimum amount.
   * @param {number} maxAmount - The maximum amount.
   * @returns {Array} Transactions within the specified amount range.
   */
  getTransactionsByAmountRange(minAmount, maxAmount) {
    return this.transactions.filter((transaction) => {
      const amount = parseFloat(transaction.transaction_amount);
      return amount >= minAmount && amount <= maxAmount;
    });
  }

  /**
   * Calculate the total amount of debit transactions.
   * @returns {number} Total amount of debit transactions.
   */
  calculateTotalDebitAmount() {
    const debitTransactions = this.getTransactionByType("debit");
    return this.calculateTotalAmount(debitTransactions);
  }

  /**
   * Find the month with the most transactions.
   * @returns {number} Month with the most transactions (1-12).
   */
  findMostTransactionsMonth() {
    const months = {};
    this.transactions.forEach((transaction) => {
      const date = new Date(transaction.transaction_date);
      const month = date.getMonth() + 1;
      months[month] = (months[month] || 0) + 1;
    });
    return Object.keys(months).reduce((a, b) =>
      months[a] > months[b] ? a : b
    );
  }

  /**
   * Find the month with the most debit transactions.
   * @returns {number} Month with the most debit transactions (1-12).
   */
  findMostDebitTransactionMonth() {
    const debitTransactions = this.getTransactionByType("debit");
    const months = {};
    debitTransactions.forEach((transaction) => {
      const date = new Date(transaction.transaction_date);
      const month = date.getMonth() + 1;
      months[month] = (months[month] || 0) + 1;
    });
    return Object.keys(months).reduce((a, b) =>
      months[a] > months[b] ? a : b
    );
  }

  /**
   * Find the transaction type with the most occurrences.
   * @returns {string} The transaction type with the most occurrences (debit, credit, or equal).
   */
  mostTransactionTypes() {
    const debitCount = this.getTransactionByType("debit").length;
    const creditCount = this.getTransactionByType("credit").length;
    if (debitCount > creditCount) {
      return "debit";
    } else if (creditCount > debitCount) {
      return "credit";
    } else {
      return "equal";
    }
  }

  /**
   * Get transactions before a specified date.
   * @param {Date} date - The date to compare against.
   * @returns {Array} Transactions before the specified date.
   */
  getTransactionsBeforeDate(date) {
    return this.transactions.filter(
      (transaction) => new Date(transaction.transaction_date) < date
    );
  }

  /**
   * Find a transaction by its ID.
   * @param {string} id - The ID of the transaction to find.
   * @returns {Object} The transaction with the specified ID, or null if not found.
   */
  findTransactionById(id) {
    return (
      this.transactions.find(
        (transaction) => transaction.transaction_id === id
      ) || null
    );
  }

  /**
   * Map transaction descriptions to a new array.
   * @returns {Array} An array containing only transaction descriptions.
   */
  mapTransactionDescriptions() {
    return this.transactions.map(
      (transaction) => transaction.transaction_description
    );
  }

  /**
   * Get the string representation of the transaction in JSON format.
   * @returns {string} String representation of the transaction in JSON format.
   */
  /**
   * Get the string representation of the transaction with the specified ID in JSON format.
   * If no ID is provided, return the string representation of all transactions.
   * @param {string} id - The ID of the transaction to find.
   * @returns {string} String representation of the transaction with the specified ID in JSON format,
   * or string representation of all transactions if no ID is provided.
   */
  string(id) {
    // If an ID is provided, find the transaction by ID and return its string representation
    if (id) {
      const foundTransaction = this.findTransactionById(id);
      return foundTransaction
        ? this.transactionToString(foundTransaction)
        : "Transaction not found";
    } else {
      // If no ID is provided, return the string representation of all transactions
      return this.transactions
        .map((transaction) => this.transactionToString(transaction))
        .join("\n");
    }
  }

  /**
   * Convert a transaction object to a string with each field on a new line.
   * @param {Object} transaction - The transaction object.
   * @returns {string} String representation of the transaction with each field on a new line.
   */
  transactionToString(transaction) {
    return Object.entries(transaction)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  }
}

module.exports = TransactionAnalyzer;
