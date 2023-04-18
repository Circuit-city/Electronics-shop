// Define an array to store the products in the cart
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  // Check if the product is already in the cart
  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    // If the product is already in the cart, increase the quantity by 1
    cart[index].quantity++;
    console.log(`${product.name} quantity increased to ${cart[index].quantity}`);
  } else {
    // If the product is not already in the cart, add it with a quantity of 1
    product.quantity = 1;
    cart.push(product);
    console.log(`${product.name} added to cart`);
  }
}

// Function to remove a product from the cart
function removeFromCart(product) {
  // Find the index of the product in the cart array
  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    // Remove the product from the cart array
    cart.splice(index, 1);
    console.log(`${product.name} removed from cart`);
  } else {
    console.log(`Product not found in cart`);
  }
}

// Function to get the total price of all products in the cart
function getTotalPrice() {
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
  }
  return totalPrice;
}

// Function to clear the cart
function clearCart() {
  cart = [];
  console.log('Cart cleared');
}

// Function to display the contents of the cart
function displayCart() {
  if (cart.length === 0) {
    console.log('Cart is empty');
  } else {
    console.log('Cart contents:');
    for (const product of cart) {
      console.log(`${product.name} x ${product.quantity} - $${product.price * product.quantity}`);
    }
    console.log(`Total price: $${getTotalPrice()}`);
  }
}

// Function to proceed to checkout
function checkout() {
  // Placeholder code for now
  console.log('Proceeding to checkout...');
}

// Example usage
const product1 = {id: 1, name: 'Product 1', price: 10};
const product2 = {id: 2, name: 'Product 2', price: 20};

addToCart(product1); // Output: "Product 1 added to cart"
addToCart(product2); // Output: "Product 2 added to cart"

displayCart(); // Output: "Cart contents:\nProduct 1 x 1 - $10\nProduct 2 x 1 - $20\nTotal price: $30"

addToCart(product1); // Output: "Product 1 quantity increased to 2"

displayCart(); // Output: "Cart contents:\nProduct 1 x 2 - $20\nProduct 2 x 1 - $20\nTotal price: $40"

removeFromCart(product1); // Output: "Product 1 removed from cart"

displayCart(); // Output: "Cart contents:\nProduct 2 x 1 - $20\nTotal price: $20"

checkout(); // Output: "Proceeding to checkout..."
