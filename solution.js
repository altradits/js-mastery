const transactions = [
  { id: "t1", category: "groceries", amount: 45 },
  { id: "t2", category: "electronics", amount: 200 },
  { id: "t3", category: "groceries", amount: 30 },
  { id: "t4", category: "transport", amount: 15 }
];

// Filter
const totalgrocerySpend = transactions
.filter((item) => item.category)