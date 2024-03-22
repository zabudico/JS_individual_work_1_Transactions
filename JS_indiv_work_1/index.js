// index.js
/**
 * This script reads transactions data from a JSON file, analyzes it using TransactionAnalyzer,
 * and logs the results to the console.
 */

const fs = require("fs");
const path = require("path");
const TransactionAnalyzer = require("./utils/TransactionAnalyzer");

const filePath = path.join(__dirname, "utils", "transactions.json");

/**
 * Reads transactions data from the specified file path and analyzes it.
 * @param {string} filePath - The file path to the transactions JSON file.
 */

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse JSON data into an array of transactions

  const transactions = JSON.parse(data);

  // Create a new instance of TransactionAnalyzer with the transactions data

  const analyzer = new TransactionAnalyzer(transactions);

  // Example usage of TransactionAnalyzer methods
  console.log("Unique Transaction Types:", analyzer.getUniqueTransactionType());
  console.log("Total Amount:", analyzer.calculateTotalAmount());
  console.log(
    "Total Amount for 2019-01-01:",
    analyzer.calculateTotalAmountByDate(2019, 1, 1)
  );

  // Print string representation of all transactions
  /*
 console.log('String representation of all transactions:');
 console.log(analyzer.string());
*/

  // Print string representation of a specific transaction by ID
  const transactionId = "97";
  console.log(
    `\nString representation of transaction with ID ${transactionId}:`
  );
  console.log(analyzer.string(transactionId));
});
