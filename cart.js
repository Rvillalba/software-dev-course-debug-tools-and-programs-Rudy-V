const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1){
    console.error("Invalid discount. Please enter a number between 0 and 1.");// Added validation for discountRate
  }
  return total - total * discountRate; 
}

function generateReceipt(cartItems, total) {
  if (isNaN(total)) { // Added validation for data type
    console.error("Invalid entry.");
    return "Error";
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; r
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
