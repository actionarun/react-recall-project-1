import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
          />

          <div>
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>
        Total: ₹ {total.toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;