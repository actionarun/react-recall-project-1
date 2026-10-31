import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

 function addToCart(product) {
  const alreadyExists = cart.some(
    (item) => item.id === product.id
  );

  if (alreadyExists) {
    alert("Product already in cart");
    return;
  }

  setCart([...cart, product]);
}

  function removeFromCart(id) {
  setCart(cart.filter((item) => item.id !== id));
}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;