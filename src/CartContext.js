import { createContext, useState } from "react";
import { productsArray } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQty(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQty(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 } // if true
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQty(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 } // if true
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  const contextValue = {
    items: [],
    getProductQty,
    addOneToCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
