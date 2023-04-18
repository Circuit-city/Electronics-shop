import React from "react";
import Navbar from "../Navbar";

const cartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    quantity: 1
  },
  {
    id: 3,
    name: "Product 3",
    price: 15,
    quantity: 3
  }
];

export default function Cart() {
  function handleDelete(id) {
    console.log(`Deleting item with id ${id}...`);
    // Send delete request to backend API
  }

  return (
    <div>
      <Navbar/>
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
